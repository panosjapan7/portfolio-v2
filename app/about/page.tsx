"use client";

import Image from "next/image";
import moment from "moment";
import "moment-timezone";
import "./about.css";
import { useState } from "react";
import MenuItem from "./components/MenuItem";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import ProjectPortfolio from "./components/ProjectPortfolio";
import ProjectMern from "./components/ProjectMern";
import ProjectTwitter from "./components/ProjectTwitter";
import AboutMobileMenu from "./components/AboutMobileMenu/AboutMobileMenu";

const AboutPage = () => {
  const [selectedTab, setSelectedTab] = useState("about-me");
  const [selectedTabMobile, setSelectedTabMobile] = useState("about-me");
  const [selectedAboutSuboptionMobile, setSelectedAboutSuboptionMobile] =
    useState("about-me");
  const [selectedProjectsSuboptionMobile, setSelectedProjectsSuboptionMobile] =
    useState("portfolio-website");

  moment.locale("en");
  moment.tz.setDefault("Europe/Stockholm");
  const currentHour = moment().format("HH");
  let isDay = false;
  if (+currentHour > 6 && +currentHour < 20) {
    isDay = true;
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-0 pb-5 pl-11 pr-11 justify-center self-center gap-10 lg:mt-0 md:mt-10 sm2:mt-10 sm:mt-10 grid grid-cols-4 md3:hidden">
          <div className="left-column col-span-1">
            <div>
              <h2
                className={`font-semibold text-xl mb-2 ${
                  isDay ? "text-black" : "text-slate-100"
                } `}
              >
                About Me
              </h2>

              <div>
                <MenuItem
                  itemValue="about-me"
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                  image="panos-2-square.jpg"
                  imageAlt="Panos"
                  menuText="About Me"
                  imageWidth={22}
                  imageHeight={22}
                  isDay={isDay}
                />
                <MenuItem
                  itemValue="tech-skills"
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                  image="tech-star.svg"
                  imageAlt="Tech icon"
                  menuText="Technical Skills"
                  imageWidth={22}
                  imageHeight={22}
                  isDay={isDay}
                />
                <div
                  className={`flex items-center gap-2 mb-5 relative cursor-pointer pt-2 pb-2 pl-3 rounded-lg ${
                    selectedTab === "experience"
                      ? "cursor-default " +
                        (isDay ? "bg-slate-100" : "bg-gray-500")
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
                  <p
                    className={`text-xs font-medium z-10 ${
                      isDay ? "text-blac" : "text-slate-50"
                    }`}
                  >
                    Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2
                className={`font-semibold text-xl mb-2 ${
                  isDay ? "text-black" : "text-slate-100"
                } `}
              >
                Projects
              </h2>
              <MenuItem
                itemValue="portfolio"
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                image="p-icon.svg"
                imageAlt="Profile icon"
                menuText="Portfolio Website"
                imageWidth={22}
                imageHeight={22}
                isDay={isDay}
              />
              <MenuItem
                itemValue="mern"
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                image="mern-icon.svg"
                imageAlt="mern icon"
                menuText="MERN + Firebase Auth"
                imageWidth={22}
                imageHeight={22}
                isDay={isDay}
              />
              {/* <div
                className={`flex items-center gap-2 mb-5 relative cursor-pointer pt-2 pb-2 pl-3 rounded-lg ${
                  selectedTab === "twitter"
                    ? "cursor-default " +
                      (isDay ? "bg-slate-100" : "bg-gray-500")
                    : "cursor-pointer"
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
                <p
                  className={`text-xs font-medium z-10 ${
                    isDay ? "text-blac" : "text-slate-50"
                  }`}
                >
                  Twitter Feed
                </p>
              </div> */}
            </div>
          </div>
          <div className="row-span-3 col-span-3">
            {selectedTab === "about-me" && <AboutMe isDay={isDay} />}
            {selectedTab === "tech-skills" && <TechnicalSkills isDay={isDay} />}
            {selectedTab === "experience" && <Experience isDay={isDay} />}
            {selectedTab === "portfolio" && <ProjectPortfolio isDay={isDay} />}
            {selectedTab === "mern" && <ProjectMern isDay={isDay} />}
            {selectedTab === "twitter" && <ProjectTwitter isDay={isDay} />}
          </div>
        </div>
      </div>
      <div className="md3:visible md4:hidden pt-6">
        <AboutMobileMenu
          selectedTabMobile={selectedTabMobile}
          setSelectedTabMobile={setSelectedTabMobile}
          selectedAboutSuboptionMobile={selectedAboutSuboptionMobile}
          setSelectedAboutSuboptionMobile={setSelectedAboutSuboptionMobile}
          selectedProjectsSuboptionMobile={selectedProjectsSuboptionMobile}
          setSelectedProjectsSuboptionMobile={
            setSelectedProjectsSuboptionMobile
          }
          isDay={isDay}
        />
        {selectedTabMobile === "about-me" &&
          selectedAboutSuboptionMobile === "about-me" && (
            <AboutMe isDay={isDay} />
          )}
        {selectedTabMobile === "about-me" &&
          selectedAboutSuboptionMobile === "tech-skills" && (
            <TechnicalSkills isDay={isDay} />
          )}
        {selectedTabMobile === "about-me" &&
          selectedAboutSuboptionMobile === "experience" && (
            <Experience isDay={isDay} />
          )}
        {selectedTabMobile === "projects" &&
          selectedProjectsSuboptionMobile === "portfolio-website" && (
            <ProjectPortfolio isDay={isDay} />
          )}
        {selectedTabMobile === "projects" &&
          selectedProjectsSuboptionMobile === "mern" && (
            <ProjectMern isDay={isDay} />
          )}
        {selectedTabMobile === "projects" &&
          selectedProjectsSuboptionMobile === "twitter" && (
            <ProjectTwitter isDay={isDay} />
          )}
      </div>
    </>
  );
};

export default AboutPage;
