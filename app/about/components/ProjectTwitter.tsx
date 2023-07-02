import React from "react";
import ProjectItem from "./ProjectItem";
import { FaTwitter } from "react-icons/fa6";

const ProjectTwitter = () => {
  return (
    <div className="relative">
      <ProjectItem
        projectTitle="Twitter Feed"
        description={[
          "One of my first school projects. It’s a pixel-perfect web page of a user’s Twitter feed.",
        ]}
        features={[
          "Using Bootstrap was a requirement.",
          "Although we didn’t have to use the exact design assets, the project should follow the exact design, with similar assets placed on the same places.",
        ]}
        frontend="Bootstrap, CSS, HTML5"
        github="https://github.com/panosjapan7/frontend2-gruppuppgift-twitter"
      />
      <FaTwitter
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          filter: "blur(8px)",
          fill: "#1DA1F2",
          opacity: 0.15,
          top: "55%",
          left: 0,
          right: "10%",
          margin: "auto",
          transform: "translateY(-50%)",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default ProjectTwitter;
