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
              selectedTabMobile === "about-me" ? "active" : ""
            }`}
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
            className={`option-container ${
              selectedTabMobile === "projects" ? "active" : ""
            }`}
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
            onClick={() => setSelectedAboutSuboptionMobile("about-me")}
          >
            <h3 className="text-sm">About Me</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedAboutSuboptionMobile === "tech-skills"
                ? "sub-option-active"
                : ""
            }`}
            onClick={() => setSelectedAboutSuboptionMobile("tech-skills")}
          >
            <h3 className="text-sm">Technical Skills</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedAboutSuboptionMobile === "experience"
                ? "sub-option-active"
                : ""
            }`}
            onClick={() => setSelectedAboutSuboptionMobile("experience")}
          >
            <h3 className="text-sm">Experience</h3>
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
            onClick={() =>
              setSelectedProjectsSuboptionMobile("portfolio-website")
            }
          >
            <h3 className="text-sm">Portfolio Website</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedProjectsSuboptionMobile === "mern"
                ? "sub-option-active"
                : ""
            }`}
            onClick={() => setSelectedProjectsSuboptionMobile("mern")}
          >
            <h3 className="text-sm">MERN + Firebase Auth</h3>
          </div>
          <div
            className={`sub-option-container ${
              selectedProjectsSuboptionMobile === "twitter-feed"
                ? "sub-option-active"
                : ""
            }`}
            onClick={() => setSelectedProjectsSuboptionMobile("twitter-feed")}
          >
            <h3 className="text-sm">Twitter Feed</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMobileMenu;
