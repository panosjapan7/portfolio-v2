import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import "./aboutMobileMenu.css";

const AboutMobileMenu = () => {
  const [selectedOption, setSelectedOption] = useState("about-me");
  const [selectedAboutSuboption, setselectedAboutSuboption] =
    useState("about-me");
  const [selectedProjectsSuboption, setSelectedProjectsSuboption] =
    useState("portfolio-website");

  return (
    <div className="ml-6 mr-3">
      <div className="flex">
        <div className="flex gap-3 flex-wrap">
          <div
            className={`option-container ${
              selectedOption === "about-me" ? "active" : ""
            }`}
            onClick={() => setSelectedOption("about-me")}
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
            className={`option-container ${
              selectedOption === "projects" ? "active" : ""
            }`}
            onClick={() => setSelectedOption("projects")}
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

      {selectedOption === "about-me" && (
        <div className="sub-options-container">
          <div
            className={`sub-option-container ${
              selectedAboutSuboption === "about-me" ? "sub-option-active" : ""
            }`}
            onClick={() => setselectedAboutSuboption("about-me")}
          >
            <h3 className="text-sm">About Me</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedAboutSuboption === "tech-skills"
                ? "sub-option-active"
                : ""
            }`}
            onClick={() => setselectedAboutSuboption("tech-skills")}
          >
            <h3 className="text-sm">Technical Skills</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedAboutSuboption === "experience" ? "sub-option-active" : ""
            }`}
            onClick={() => setselectedAboutSuboption("experience")}
          >
            <h3 className="text-sm">Experience</h3>
          </div>
        </div>
      )}

      {selectedOption === "projects" && (
        <div className="sub-options-container">
          <div
            className={`sub-option-container ${
              selectedProjectsSuboption === "portfolio-website"
                ? "sub-option-active"
                : ""
            }`}
            onClick={() => setSelectedProjectsSuboption("portfolio-website")}
          >
            <h3 className="text-sm">Portfolio Website</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedProjectsSuboption === "mern" ? "sub-option-active" : ""
            }`}
            onClick={() => setSelectedProjectsSuboption("mern")}
          >
            <h3 className="text-sm">MERN + Firebase Auth</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedProjectsSuboption === "twitter-feed"
                ? "sub-option-active"
                : ""
            }`}
            onClick={() => setSelectedProjectsSuboption("twitter-feed")}
          >
            <h3 className="text-sm">Twitter Feed</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMobileMenu;
