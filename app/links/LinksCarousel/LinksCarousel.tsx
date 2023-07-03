"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./carousel.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const LinksCarousel = () => {
  const [loading, setLoading] = useState(true);
  let slider: any;

  let angleOffset = 0;
  let unitAngle: any;
  let lastMousePosition: any;
  let curMousePosition: any;
  let deltaMouse: any;
  let clock: any;
  let lastFrameTime = NaN;
  let velocity = 0;
  let meanPosition = 0;
  let position = 0;
  const springConstant = 80;
  const sliderMass = 1;
  const dampingForce = 10;
  const acceleration = -60;
  const mouseSensitivity = 0.2;
  const touchSensitivity = 0.25;
  const MAX_VELOCITY = 1000;

  let cards: HTMLDivElement[] = [];

  useEffect(() => {
    cards = Array.from(document.querySelectorAll(".card")) as HTMLDivElement[];
    // const cards = Array.from(document.querySelectorAll(".card")) as HTMLDivElement[]; // let cards = [...document.querySelectorAll(".card")];
    console.log({ cards });
    slider = document.querySelector(".circular-slider");
    distribute(cards);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("wheel", throttle(handleWheel, 300));

    // console.log({ cards });
    // console.log({ slider });

    setTimeout(() => {
      setLoading(false);
    }, 100);

    // setLoading(false);
  }, []);

  let roundToFactor = (value: any, factor: any) =>
    Math.round(value / factor) * factor;

  function handleMouseDown(event: any) {
    cancelAnimation();
    lastMousePosition = event.clientX;
    curMousePosition = event.clientX;
    deltaMouse = 0;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event: any) {
    curMousePosition = event.clientX;
    let delta = lastMousePosition - curMousePosition;
    deltaMouse = curMousePosition - lastMousePosition;
    lastMousePosition = curMousePosition;
    angleOffset += delta * mouseSensitivity;
    let lastMouseMoveTime = Date.now();
    setAngleOffset(angleOffset);
  }

  function handleMouseUp() {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    meanPosition = roundToFactor(angleOffset, unitAngle);
    velocity = -deltaMouse * 50 * mouseSensitivity;
    position = angleOffset;
    clock = requestAnimationFrame(spin);
  }

  function handleTouchStart(event: any) {
    cancelAnimation();
    lastMousePosition = event.touches[0].clientX;
    curMousePosition = event.touches[0].clientX;
    deltaMouse = 0;
  }

  function handleTouchMove(event: any) {
    curMousePosition = event.touches[0].clientX;
    let delta = lastMousePosition - curMousePosition;
    deltaMouse = curMousePosition - lastMousePosition;
    lastMousePosition = curMousePosition;
    angleOffset += delta * touchSensitivity;
    setAngleOffset(angleOffset);
  }

  function handleTouchEnd() {
    meanPosition = roundToFactor(angleOffset, unitAngle);
    velocity = -deltaMouse * 50 * touchSensitivity;
    position = angleOffset;
    clock = requestAnimationFrame(spin);
  }

  let decayClock = 0;

  function throttle(fn: any, wait: any) {
    var time = Date.now();
    return function (event: any) {
      if (time + wait - Date.now() < 0) {
        fn(event);
        time = Date.now();
      }
    };
  }

  function handleWheel(event: any) {
    cancelAnimation();
    velocity += 100 * Math.sign(event.deltaY);
    clock = requestAnimationFrame(spin);
  }

  function distribute(cards: HTMLDivElement[]) {
    if (cards.length == 0) return;
    let angle = (Math.PI * 2) / cards.length;
    unitAngle = 360 / cards.length;
    let radius = cards[0].offsetWidth / (2 * Math.tan(angle / 2)) + 16;
    slider.style.transformOrigin = `center center ${-radius}px`;
    if (slider) {
      slider.style.transformOrigin = `center center ${-radius}px`;
      cards.forEach((card, index: number) => {
        let tiltAngle = index * angle;
        let deltaZ = radius * (1 - Math.cos(tiltAngle));
        let deltaY = radius * Math.sin(tiltAngle);
        card.style.transform = `
                translate3d(${deltaY}px,0px,${-deltaZ}px)
                rotateY(${(tiltAngle * 180) / Math.PI}deg)
            `;
      });
      setLoading(false);
    }
  }

  function spin(currentFrameTime: any) {
    lastFrameTime = lastFrameTime || currentFrameTime;
    let deltaTime = (currentFrameTime - lastFrameTime) / 1000;

    velocity += Math.sign(velocity) * acceleration * deltaTime;
    angleOffset += velocity * deltaTime;
    position = angleOffset;
    setAngleOffset(angleOffset);

    let animating = true;

    lastFrameTime = currentFrameTime;
    if (Math.abs(velocity) > 10) {
      clock = requestAnimationFrame(spin);
    } else {
      meanPosition = roundToFactor(angleOffset, unitAngle);
      position = angleOffset;
      lastFrameTime = NaN;
      clock = requestAnimationFrame(snap);
    }
  }

  function snap(currentFrameTime: any) {
    lastFrameTime = lastFrameTime || currentFrameTime;
    let deltaTime = (currentFrameTime - lastFrameTime) / 1000;

    let displacement = position - meanPosition;
    let netForce = -displacement * springConstant - velocity * dampingForce;
    let acceleration = netForce / sliderMass;
    velocity += acceleration * deltaTime;
    position += velocity * deltaTime;
    angleOffset = position;
    setAngleOffset(angleOffset);

    lastFrameTime = currentFrameTime;
    if (Math.abs(acceleration) > 0.1) {
      clock = requestAnimationFrame(snap);
    } else {
      meanPosition = roundToFactor(angleOffset, unitAngle);
      angleOffset = meanPosition;
      lastFrameTime = NaN;
      let animating = false;
    }
  }

  function setAngleOffset(newOffset: any) {
    angleOffset = newOffset;
    slider.style.transform = `rotateY(${-angleOffset}deg)`;
  }

  function cancelAnimation() {
    cancelAnimationFrame(clock);
    lastFrameTime = NaN;
  }

  console.log({ loading });
  return (
    <>
      {loading && (
        <div className="loaderContainer">
          <div className="line-2-vertical"></div>
        </div>
      )}
      {/* 
      {!loading ? (
         */}
      <div
        id="wrapper"
        className={`${loading ? "invisible" : "visible"}`}
        // className={`wrapper ${
        //   cards.length > 0 ? "display: block" : "display:hidden"
        // }`}
      >
        <div className="circular-slider">
          <div className="card">
            <div className="content">
              <a href="/files/panos-tsapanidis-cv.pdf" target="_blank">
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    // src="/images/cv-icon-9B9B9B.png"
                    src="/images/cv-icon-black.png"
                    height={90}
                    width={90}
                    alt="cv icon"
                    className="mb-2"
                  />
                  <p className="text-xl">Curriculum Vitae</p>
                </div>
              </a>
            </div>
          </div>
          <div className="card" onClick={() => console.log("Panos")}>
            <div className="content">
              <a
                href="https://www.linkedin.com/in/panostsapanidis/"
                target="_blank"
              >
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <FaLinkedin
                    fill="#0A66C2"
                    style={{ width: 70, height: 70 }}
                    className="mb-2"
                  />
                  <p className="text-xl">LinkedIn Profile</p>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <a href="https://github.com/panosjapan7" target="_blank">
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <FaGithub
                    fill="#00000"
                    style={{ width: 70, height: 70 }}
                    className="mb-2"
                  />
                  <p className="text-xl">GitHub Profile</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*
      ) : (
        <div className="loaderContainer">
          <div className="line-2-vertical"></div>
        </div>
      )}
                  */}
    </>
  );
};

export default LinksCarousel;
