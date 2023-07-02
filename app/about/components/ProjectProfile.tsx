import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectProfile = () => {
  return (
    <div className="relative">
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
        github="https:/www.google.com"
        link="https:/www.google.com"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: "15%",
          margin: "auto",
          transform: "translateY(-50%)",
          textAlign: "center",
          zIndex: 10,

          width: "301px",
          height: "301px",
          background: "#ffc43f",
          opacity: 0.4,
          filter: "blur(50px)",
        }}
      ></div>
    </div>
  );
};

export default ProjectProfile;
