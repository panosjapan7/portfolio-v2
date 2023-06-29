"use client";

import Image from "next/image";
import "./about.css";
import { useState } from "react";

const AboutPage = () => {
  const [selectedTab, setSelectedTab] = useState("about-me");
  return (
    <div className="pl-11 pr-11 flex justify-center gap-10">
      <div className="left-column">
        <div>
          <h2 className="text-xl font-semibold mb-5">About Me</h2>
          <div>
            <div
              className={`flex items-center gap-2 mb-5 relative cursor-pointer ${
                selectedTab === "about-me" ? "cursor-default" : "cursor-pointer"
              }`}
              onClick={() => setSelectedTab("about-me")}
              // style={{ position: "relative" }}
            >
              <Image
                className="rounded border border-white z-10"
                src="/images/panos-2-square.jpg"
                width={23}
                height={23}
                alt="Panos"
              />
              <p className="text-xs font-medium z-10">About Me</p>
              {selectedTab === "about-me" && (
                <div className="grey-reactangle" style={{ zIndex: 1 }}></div>
              )}
            </div>

            <div
              className={`flex items-center gap-2 mb-5 relative cursor-pointer ${
                selectedTab === "tech-skills"
                  ? "cursor-default"
                  : "cursor-pointer"
              }`}
              onClick={() => setSelectedTab("tech-skills")}
            >
              <div className="rounded border border-white star-container z-10">
                <Image
                  src="/images/tech-star.svg"
                  width={20}
                  height={20}
                  alt="star shape"
                />
              </div>
              <p className="text-xs font-medium z-10">Technical Skills</p>
              {selectedTab === "tech-skills" && (
                <div className="grey-reactangle" style={{ zIndex: 1 }}></div>
              )}
            </div>

            <div
              className={`flex items-center gap-2 mb-5 relative cursor-pointer ${
                selectedTab === "experience"
                  ? "cursor-default"
                  : "cursor-pointer"
              }`}
              onClick={() => setSelectedTab("experience")}
            >
              <div className="exp-container z-10">
                <Image
                  src="/images/exp-star.png"
                  width={12}
                  height={12}
                  alt="star shape"
                />
              </div>
              <p className="text-xs font-medium z-10">Experience</p>
              {selectedTab === "experience" && (
                <div className="grey-reactangle" style={{ zIndex: 1 }}></div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-5">Projects</h2>
          <div
            className={`flex items-center gap-2 mb-5 relative cursor-pointer ${
              selectedTab === "portfolio" ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={() => setSelectedTab("portfolio")}
          >
            <div className="exp-container z-10">
              <Image
                src="/images/p-icon.svg"
                width={22}
                height={22}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium z-10">Portfolio</p>
            {selectedTab === "portfolio" && (
              <div className="grey-reactangle" style={{ zIndex: 1 }}></div>
            )}
          </div>
          <div
            className={`flex items-center gap-2 mb-5 relative cursor-pointer ${
              selectedTab === "mern" ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={() => setSelectedTab("mern")}
          >
            <div className="rounded border border-white z-10">
              <Image
                src="/images/mern-icon.svg"
                width={20}
                height={20}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium z-10">MERN + Firebase Auth</p>
            {selectedTab === "mern" && (
              <div className="grey-reactangle" style={{ zIndex: 1 }}></div>
            )}
          </div>
          <div
            className={`flex items-center gap-2 mb-5 relative cursor-pointer ${
              selectedTab === "twitter" ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={() => setSelectedTab("twitter")}
          >
            <div className="exp-container z-10">
              <Image
                src="/images/twitter-icon.png"
                width={12}
                height={12}
                alt="star shape"
              />
            </div>
            <p className="text-xs font-medium z-10">Twitter Feed</p>
            {selectedTab === "twitter" && (
              <div className="grey-reactangle" style={{ zIndex: 1 }}></div>
            )}
          </div>
        </div>
      </div>
      <div className="border border-black row-span-3 col-span-4">
        <p>Right Colummn</p>
      </div>
    </div>
  );
};

export default AboutPage;
