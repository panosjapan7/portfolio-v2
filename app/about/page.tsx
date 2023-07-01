"use client";

import Image from "next/image";
import "./about.css";
import { useState } from "react";
import MenuItem from "./components/MenuItem";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from "./components/TechnicalSkills";

const AboutPage = () => {
  const [selectedTab, setSelectedTab] = useState("about-me");
  return (
    <div className="mt-0 pl-11 pr-11 flex justify-center gap-10 lg:mt-0 md:mt-10 sm2:mt-10 sm:mt-10">
      <div className="left-column">
        <div>
          <h2 className="text-xl font-semibold mb-2">About Me</h2>

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
            />
            <div
              className={`flex items-center gap-2 mb-5 relative cursor-pointer pt-2 pb-2 pl-3 rounded-lg ${
                selectedTab === "experience"
                  ? "cursor-default bg-slate-100"
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
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <MenuItem
            itemValue="portfolio"
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            image="p-icon.svg"
            imageAlt="Profile icon"
            menuText="Profile"
            imageWidth={22}
            imageHeight={22}
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
          />
          <div
            className={`flex items-center gap-2 mb-5 relative cursor-pointer pt-2 pb-2 pl-3 rounded-lg  ${
              selectedTab === "twitter"
                ? "cursor-default bg-slate-100"
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
            <p className="text-xs font-medium z-10">Twitter Feed</p>
          </div>
        </div>
      </div>
      <div className="row-span-3 col-span-4">
        {selectedTab === "about-me" && <AboutMe />}
        {selectedTab === "tech-skills" && <TechnicalSkills />}
      </div>
    </div>
  );
};

export default AboutPage;
