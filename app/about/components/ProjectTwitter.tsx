import React from "react";
import ProjectItem from "./ProjectItem";
import { FaTwitter } from "react-icons/fa6";

const ProjectTwitter = () => {
  return (
    <div className="relative md3:p-5">
      <ProjectItem
        projectTitle="Twitter Feed"
        description={[
          "One of my first school projects. It’s a pixel-perfect static web page of a user’s Twitter feed (the way it looked in 2021).",
        ]}
        features={[
          "Using Bootstrap was a requirement.",
          "Although we didn’t have to use the exact design assets, the project should follow the exact design, with similar assets placed on the same places.",
        ]}
        frontend="Bootstrap, CSS, HTML5"
        github="https://github.com/panosjapan7/frontend2-gruppuppgift-twitter"
        link="https://frontend2-gruppuppgift-twitter.vercel.app/"
      />
      <FaTwitter
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          filter: "blur(8px)",
          fill: "#1DA1F2",
          opacity: 0.15,
          top: "60%",
          left: 0,
          right: "17%",
          margin: "auto",
          transform: "translateY(-50%)",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default ProjectTwitter;
