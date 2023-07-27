import React from "react";
import ProjectItem from "./ProjectItem";
import "./projectMern.css";

const ProjectMitsakis = () => {
  return (
    <div className="relative md3:p-5">
      <div className="content-wrapper">
        <ProjectItem
          projectTitle="Agroktima Mitsakis"
          description={[
            "A responsive landing page I designed and built for a small business in Greece.",
          ]}
          features={[
            "Mobile Drawer Menu with animation.",
            "Image galleries.",
            "Scroll Back To Top button",
          ]}
          frontend="CSS, HTML5, JavaScript"
          github="https://github.com/panosjapan7/agroktima-mitsakis"
          link="https://www.agroktimamitsakis.gr/"
        />
      </div>
      {/* <div className="fade-block"></div> */}
    </div>
  );
};

export default ProjectMitsakis;
