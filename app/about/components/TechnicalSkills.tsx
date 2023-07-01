import React from "react";
import Image from "next/image";
import TechnicalSkill from "./TechnicalSkill";

const TechnicalSkills = () => {
  return (
    <div className="max-w-xl">
      <h2 className="font-semibold text-lg text-slate-800">Technical Skills</h2>
      <div
        style={{
          border: "1px solid #dddddd",
          marginBottom: 12,
          //   maxWidth: 512,
          width: "100%",
          boxSizing: "border-box",
        }}
      ></div>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <h3 className="text-slate-800 font-medium mb-1">Frontend</h3>
          <TechnicalSkill
            source="/images/html5-icon.svg"
            alt="html5 icon"
            width={11}
            height={14}
            skill="HTML5"
          />
          <TechnicalSkill
            source="/images/javascript-icon.svg"
            alt="javascript icon"
            width={14}
            height={14}
            skill="JavaScript"
          />
          <TechnicalSkill
            source="/images/jquery-icon.svg"
            alt="jquery icon"
            width={14}
            height={14}
            skill="JQuery"
          />
          <TechnicalSkill
            source="/images/nextjs-icon.svg"
            alt="next.js icon"
            width={14}
            height={14}
            skill="Next.js"
          />
          <TechnicalSkill
            source="/images/react-icon.svg"
            alt="react.js icon"
            width={14}
            height={14}
            skill="React.js"
          />
          <TechnicalSkill
            source="/images/react-icon.svg"
            alt="react.js icon"
            width={14}
            height={14}
            skill="React Native"
          />
          <TechnicalSkill
            source="/images/typescript-icon.svg"
            alt="typescript icon"
            width={14}
            height={14}
            skill="TypeScript"
          />
        </div>
        <div>
          <h3 className="text-slate-800 font-medium">Styling</h3>
          <TechnicalSkill
            source="/images/css-icon.svg"
            alt="css icon"
            width={14}
            height={14}
            skill="CSS"
          />
          <TechnicalSkill
            source="/images/bootstrap-icon.svg"
            alt="bootstrap icon"
            width={14}
            height={11}
            skill="Bootstrap"
          />
          <TechnicalSkill
            source="/images/sass-icon.svg"
            alt="sass icon"
            width={14}
            height={14}
            skill="Sass"
          />
          <TechnicalSkill
            source="/images/styled-icon.svg"
            alt="styled components icon"
            width={14}
            height={8}
            skill="Styled Components"
          />
          <TechnicalSkill
            source="/images/tailwind-icon.svg"
            alt="tailwind icon"
            width={14}
            height={14}
            skill="Tailwind.css"
          />
        </div>
        <div>
          <h3 className="text-slate-800 font-medium">CMS</h3>
          <TechnicalSkill
            source="/images/payload-icon.svg"
            alt="payload icon"
            width={14}
            height={14}
            skill="Payload CMS"
          />
          <TechnicalSkill
            source="/images/wordpress-icon.svg"
            alt="wordpress icon"
            width={14}
            height={14}
            skill="Wordpress"
          />
          <div className="mt-6">
            <h3 className="text-slate-800 font-medium">Design</h3>
            <TechnicalSkill
              source="/images/figma-icon.svg"
              alt="figma icon"
              width={14}
              height={14}
              skill="Figma"
            />
            <TechnicalSkill
              source="/images/photoshop-icon.svg"
              alt="photoshop icon"
              width={14}
              height={14}
              skill="Photoshop"
            />
            <TechnicalSkill
              source="/images/sketch-icon.svg"
              alt="sketch icon"
              width={14}
              height={14}
              skill="Sketch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
