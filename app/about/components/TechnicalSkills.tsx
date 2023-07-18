import React from "react";
import Image from "next/image";
import TechnicalSkill from "./TechnicalSkill";

const TechnicalSkills = ({ isDay }: { isDay: boolean }) => {
  return (
    <div className="max-w-xl md3:p-5">
      <div className="about-content-wrapper">
        <h2
          className={`font-semibold text-lg ${
            isDay ? "text-slate-800" : "text-slate-50"
          }`}
        >
          Technical Skills
        </h2>
        <div
          style={{
            border: "1px solid #dddddd",
            marginBottom: 12,
            width: "100%",
            boxSizing: "border-box",
          }}
        ></div>
        <div className="grid grid-cols-3 gap-10 md3:gap-5">
          <div>
            <h3
              className={`font-medium mb-1 ${
                isDay ? "text-slate-800" : "text-slate-50"
              }`}
            >
              Frontend
            </h3>
            <TechnicalSkill
              source="/images/html5-icon.svg"
              alt="html5 icon"
              width={11}
              height={14}
              skill="HTML5"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/javascript-icon.svg"
              alt="javascript icon"
              width={14}
              height={14}
              skill="JavaScript"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/jquery-icon.svg"
              alt="jquery icon"
              width={14}
              height={14}
              skill="JQuery"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/nextjs-icon.svg"
              alt="next.js icon"
              width={14}
              height={14}
              skill="Next.js"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/react-icon.svg"
              alt="react.js icon"
              width={14}
              height={14}
              skill="React.js"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/react-icon.svg"
              alt="react.js icon"
              width={14}
              height={14}
              skill="React Native"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/typescript-icon.svg"
              alt="typescript icon"
              width={14}
              height={14}
              skill="TypeScript"
              isDay={isDay}
            />
          </div>
          <div>
            <h3
              className={`font-medium mb-1 ${
                isDay ? "text-slate-800" : "text-slate-50"
              }`}
            >
              Styling
            </h3>
            <TechnicalSkill
              source="/images/css-icon.svg"
              alt="css icon"
              width={14}
              height={14}
              skill="CSS"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/bootstrap-icon.svg"
              alt="bootstrap icon"
              width={14}
              height={11}
              skill="Bootstrap"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/sass-icon.svg"
              alt="sass icon"
              width={14}
              height={14}
              skill="Sass"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/styled-icon.svg"
              alt="styled components icon"
              width={14}
              height={8}
              skill="Styled Components"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/tailwind-icon.svg"
              alt="tailwind icon"
              width={14}
              height={14}
              skill="Tailwind.css"
              isDay={isDay}
            />
          </div>
          <div>
            <h3
              className={`font-medium mb-1 ${
                isDay ? "text-slate-800" : "text-slate-50"
              }`}
            >
              CMS
            </h3>
            <TechnicalSkill
              source="/images/payload-icon.svg"
              alt="payload icon"
              width={14}
              height={14}
              skill="Payload CMS"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/wordpress-icon.svg"
              alt="wordpress icon"
              width={14}
              height={14}
              skill="Wordpress"
              isDay={isDay}
            />
            <div className="mt-6">
              <h3
                className={`font-medium mb-1 ${
                  isDay ? "text-slate-800" : "text-slate-50"
                }`}
              >
                Design
              </h3>
              <TechnicalSkill
                source="/images/figma-icon.svg"
                alt="figma icon"
                width={14}
                height={14}
                skill="Figma"
                isDay={isDay}
              />
              <TechnicalSkill
                source="/images/photoshop-icon.svg"
                alt="photoshop icon"
                width={14}
                height={14}
                skill="Photoshop"
                isDay={isDay}
              />
              <TechnicalSkill
                source="/images/sketch-icon.svg"
                alt="sketch icon"
                width={14}
                height={14}
                skill="Sketch"
                isDay={isDay}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #dddddd",
            marginTop: 16,
            marginBottom: 16,
            //   maxWidth: 512,
            width: "100%",
            boxSizing: "border-box",
          }}
        ></div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h3
              className={`font-medium mb-1 ${
                isDay ? "text-slate-800" : "text-slate-50"
              }`}
            >
              Backend
            </h3>
            <TechnicalSkill
              source="/images/javascript-icon.svg"
              alt="javascript icon"
              width={14}
              height={14}
              skill="JavaSciprt"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/node-icon.svg"
              alt="node.js icon"
              width={14}
              height={8}
              skill="Node.js"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/typescript-icon.svg"
              alt="typescript icon"
              width={14}
              height={14}
              skill="TypeScript"
              isDay={isDay}
            />
          </div>
          <div>
            <h3
              className={`font-medium mb-1 ${
                isDay ? "text-slate-800" : "text-slate-50"
              }`}
            >
              DBs / APIs
            </h3>
            <TechnicalSkill
              source="/images/firebase-icon.svg"
              alt="firebase icon"
              width={11}
              height={14}
              skill="Firebase"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/mongodb-icon.svg"
              alt="mongodb icon"
              width={9}
              height={2}
              skill="MongoDB"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/postman-icon.svg"
              alt="postman icon"
              width={14}
              height={14}
              skill="Postman"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/rest-api-icon.svg"
              alt="rest api icon"
              width={14}
              height={11}
              skill="REST API"
              isDay={isDay}
            />
          </div>
          <div>
            <h3
              className={`font-medium mb-1 ${
                isDay ? "text-slate-800" : "text-slate-50"
              }`}
            >
              Version Control
            </h3>
            <TechnicalSkill
              source="/images/git-icon.svg"
              alt="git icon"
              width={14}
              height={14}
              skill="Git"
              isDay={isDay}
            />
            <TechnicalSkill
              source="/images/github-icon.svg"
              alt="github icon"
              width={14}
              height={14}
              skill="GitHub"
              isDay={isDay}
            />
          </div>
        </div>
      </div>
      {/* <div className="fade-block"></div> */}
    </div>
  );
};

export default TechnicalSkills;
