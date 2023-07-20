import React from "react";
import ProjectItem from "./ProjectItem";
import "./projectPortfolio.css";

const ProjectPortfolio = () => {
  return (
    <div className="relative md3:p-5">
      <div className="content-wrapper-portfolio">
        <ProjectItem
          projectTitle="Portfolio Website"
          description={[
            "I’ve always approached minimal design in a very clean and clinical way so I wanted to explore a minimal direction that has warmth to it.",
            "Another thing I wanted to do is get myself familiar with Next.js and Tailwind so I used them to build this project.",
            "I'm also really passionate about scalable and readable code so I used child components that receive props to dynamically generate components by passing just the content data to them.",
          ]}
          features={[
            "The home page fetches data from Weather API to show weather conditions in Stockholm.",
            "The home page displays the time and date in Stockholm.",
            "The menu in desktop resolutions was built with Framer Motion to simulate the menu of Apple's Mac OS.",
          ]}
          frontend={
            "Figma, Framer Motion, Next JS, Tailwind, TypeScript, Weather API"
          }
          github="https://github.com/panosjapan7/portfolio-v2"
        />
      </div>
      {/* <div className="fade-block"></div> */}
    </div>
  );
};

export default ProjectPortfolio;
