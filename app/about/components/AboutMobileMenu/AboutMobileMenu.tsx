import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import "./aboutMobileMenu.css";

interface MobileMenu {
  selectedTabMobile: string;
  setSelectedTabMobile: (selectedTabMobile: string) => void;
  selectedAboutSuboptionMobile: string;
  setSelectedAboutSuboptionMobile: (
    selectedAboutSuboptionMobile: string
  ) => void;
  selectedProjectsSuboptionMobile: string;
  setSelectedProjectsSuboptionMobile: (
    selectedProjectsSuboptionMobile: string
  ) => void;
}

const AboutMobileMenu: React.FC<MobileMenu> = ({
  selectedTabMobile,
  setSelectedTabMobile,
  selectedAboutSuboptionMobile,
  setSelectedAboutSuboptionMobile,
  selectedProjectsSuboptionMobile,
  setSelectedProjectsSuboptionMobile,
}) => {
  const containerClassNameAbout = `option-container ${
    selectedTabMobile === "about-me" ? "active" : ""
  }`;
  const containerClassNameProjects = `option-container ${
    selectedTabMobile === "projects" ? "active" : ""
  }`;

  const suboptionContainerClassname = `sub-option-container ${
    selectedAboutSuboptionMobile === "about-me" ? "sub-option-active" : ""
  }`;

  const suboptions = [
    "about-me",
    "tech-skills",
    "experience",
    "portfolio-website",
    "mern",
    "twitter",
  ];

  const aboutSuboptionsContainerClassName = (suboption: string) => {
    return `sub-option-container ${
      selectedAboutSuboptionMobile === suboption ? "sub-option-active" : ""
    }`;
  };

  const projectsSuboptionsContainerClassName = (suboption: string) => {
    return `sub-option-container ${
      selectedProjectsSuboptionMobile === suboption ? "sub-option-active" : ""
    }`;
  };

  return (
    <div className="ml-6 mr-3">
      <div className="flex">
        <div className="flex gap-3 flex-wrap">
          <div
            // className={containerClassNameAbout}
            className={`option-container ${
              selectedTabMobile === "about-me" ? "active" : ""
            }`}
            // style={{
            //   background: containerClassNameAbout.includes("active")
            //     ? isDay
            //       ? "rgba(255, 255, 255, 0.1)"
            //       : "rgba(108, 108, 108, 0.5)"
            //     : "unset",
            // }}
            onClick={() => setSelectedTabMobile("about-me")}
          >
            <FaUser
              style={{
                height: "16px",
                width: "16px",
                marginTop: -4,
                color: "#9B9B9B",
              }}
            />
            <h2 className="text-base" style={{ color: "#9B9B9B" }}>
              About Me
            </h2>
          </div>
          <div
            // className={containerClassNameProjects}
            className={`option-container ${
              selectedTabMobile === "projects" ? "active" : ""
            }`}
            // style={{
            //   background: containerClassNameProjects.includes("active")
            //     ? isDay
            //       ? "rgba(255, 255, 255, 0.1)"
            //       : "rgba(108, 108, 108, 0.5)"
            //     : "unset",
            // }}
            onClick={() => setSelectedTabMobile("projects")}
          >
            <IoDocumentsOutline
              style={{
                height: "18px",
                width: "18px",
                marginTop: 0,
                color: "#9B9B9B",
              }}
            />
            <h2 className="text-base" style={{ color: "#9B9B9B" }}>
              Projects
            </h2>
          </div>
        </div>
      </div>

      {selectedTabMobile === "about-me" && (
        <div className="sub-options-container">
          <div
            className={`sub-option-container ${
              selectedAboutSuboptionMobile === "about-me"
                ? "sub-option-active"
                : ""
            }`}
            // className={aboutSuboptionsContainerClassName("about-me")}
            // style={{
            //   background: aboutSuboptionsContainerClassName(
            //     "about-me"
            //   ).includes("sub-option-active")
            //     ? isDay
            //       ? "rgba(255, 255, 255, 0.4)"
            //       : "rgba(110, 108, 108, 0.8)"
            //     : "unset",
            // }}
            onClick={() => setSelectedAboutSuboptionMobile("about-me")}
          >
            <h3 className="text-sm" style={{ color: "#9b9b9b" }}>
              About Me
            </h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedAboutSuboptionMobile === "tech-skills"
                ? "sub-option-active"
                : ""
            }`}
            // className={aboutSuboptionsContainerClassName("tech-skills")}
            // style={{
            //   background: aboutSuboptionsContainerClassName(
            //     "tech-skills"
            //   ).includes("sub-option-active")
            //     ? isDay
            //       ? "rgba(255, 255, 255, 0.4)"
            //       : "rgba(110, 108, 108, 0.8)"
            //     : "unset",
            // }}
            onClick={() => setSelectedAboutSuboptionMobile("tech-skills")}
          >
            <h3 className="text-sm" style={{ color: "#9b9b9b" }}>
              Technical Skills
            </h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedAboutSuboptionMobile === "experience"
                ? "sub-option-active"
                : ""
            }`}
            // className={aboutSuboptionsContainerClassName("experience")}
            // style={{
            //   background: aboutSuboptionsContainerClassName(
            //     "experience"
            //   ).includes("sub-option-active")
            //     ? isDay
            //       ? "rgba(255, 255, 255, 0.4)"
            //       : "rgba(110, 108, 108, 0.8)"
            //     : "unset",
            // }}
            onClick={() => setSelectedAboutSuboptionMobile("experience")}
          >
            <h3 className="text-sm" style={{ color: "#9b9b9b" }}>
              Experience
            </h3>
          </div>
        </div>
      )}

      {selectedTabMobile === "projects" && (
        <div className="sub-options-container">
          <div
            className={`sub-option-container ${
              selectedProjectsSuboptionMobile === "portfolio-website"
                ? "sub-option-active"
                : ""
            }`}
            // className={projectsSuboptionsContainerClassName(
            //   "portfolio-website"
            // )}
            // style={{
            //   background: projectsSuboptionsContainerClassName(
            //     "portfolio-website"
            //   ).includes("sub-option-active")
            //     ? isDay
            //       ? "rgba(255, 255, 255, 0.4)"
            //       : "rgba(110, 108, 108, 0.8)"
            //     : "unset",
            // }}
            onClick={() =>
              setSelectedProjectsSuboptionMobile("portfolio-website")
            }
          >
            <h3 className="text-sm" style={{ color: "#9b9b9b" }}>
              Portfolio Website
            </h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedProjectsSuboptionMobile === "mern"
                ? "sub-option-active"
                : ""
            }`}
            // className={projectsSuboptionsContainerClassName("mern")}
            // style={{
            //   background: projectsSuboptionsContainerClassName("mern").includes(
            //     "sub-option-active"
            //   )
            //     ? isDay
            //       ? "rgba(255, 255, 255, 0.4)"
            //       : "rgba(110, 108, 108, 0.8)"
            //     : "unset",
            // }}
            onClick={() => setSelectedProjectsSuboptionMobile("mern")}
          >
            <h3 className="text-sm" style={{ color: "#9b9b9b" }}>
              MERN + Firebase Auth
            </h3>
          </div>
          {/* <div
            className={projectsSuboptionsContainerClassName("twitter")}
            style={{
              background: projectsSuboptionsContainerClassName(
                "twitter"
              ).includes("sub-option-active")
                ? isDay
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(110, 108, 108, 0.8)"
                : "unset",
            }}
            onClick={() => setSelectedProjectsSuboptionMobile("twitter")}
          >
            <h3
              className="text-sm"
              style={{ color: isDay ? "#9b9b9b" : "white" }}
            >
              Twitter Feed
            </h3>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default AboutMobileMenu;
