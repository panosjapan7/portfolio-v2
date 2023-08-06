import React from "react";
import ProjectItem from "./ProjectItem";
import "./projectMern.css";

const ProjectAdidas = () => {
  return (
    <div className="relative md3:p-5">
      <div className="content-wrapper">
        <ProjectItem
          projectTitle="adidas ultraboost 1.0"
          description={[
            "A responsive landing page for my portfolio using React, CSS, and TypeScript. It consists of two sections, Home page and Product page, has frontend cart functionality as well as animations powered by GSAP and Framer Motion.",
          ]}
          features={[
            "Cart Modal animation built with Framer Motion",
            "Pull-to-Open, draggable, animated Cart UI element built with GSAP",
            "Image slider built with JavaScript and CSS (no libraries)",
            "Cart functionality (frontend)",
          ]}
          frontend="CSS, Framer Motion, GreenSock Animation Platform (GSAP), React, TypeScript"
          github="https://github.com/panosjapan7/adidas-project"
          link="https://adidas-project.vercel.app/"
        />
      </div>
    </div>
  );
};

export default ProjectAdidas;
