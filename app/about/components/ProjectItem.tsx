import React from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";

interface ProjectItem {
  projectTitle: string;
  description: string[];
  features: string[];
  frontend?: string;
  backend?: string;
  github?: string;
  link?: string;
  isDay: boolean;
}

const ProjectItem: React.FC<ProjectItem> = ({
  projectTitle,
  description,
  features,
  frontend,
  backend,
  github,
  link,
  isDay,
}) => {
  return (
    <div className="max-w-xl z-20" style={{ zIndex: 30, position: "relative" }}>
      <div className="mb-5 max-w-xl">
        <h2
          className={`font-semibold text-lg ${
            isDay ? "text-slate-800" : "text-white"
          }`}
        >
          {projectTitle}
        </h2>
        <div
          style={{
            border: `1px solid ${isDay ? "#dddddd" : "#ededed"} `,
            marginBottom: 8,
          }}
        ></div>
        {description.map((paragraph, index) => (
          <p
            key={index}
            className={`font-light mb-1 pt-1 leading-5 ${
              isDay ? "text black" : "text-slate-50"
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mb-5">
        <p
          className={`font-semibold mb-1 ${
            isDay ? "text-slate-800" : "text-white"
          }`}
        >
          Features
        </p>
        <ul className="list-disc ml-6">
          {features.map((feature, index) => (
            <li
              className={`text-sm mb-1 ${isDay ? "text-black" : "text-white"}`}
              key={index}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <p
          className={`font-semibold mb-1 ${
            isDay ? "text-slate-800" : "text-white"
          }`}
        >
          Tools & Technologies
        </p>
        <div
          className={`grid ${
            frontend && backend ? "grid-cols-2" : "grid-cols-1"
          }  gap-3`}
        >
          {frontend && (
            <div>
              <p
                className={`text-sm font-medium ${
                  isDay ? "text-slate-800" : "text-white"
                }`}
              >
                Frontend
              </p>
              <p
                className={`italic text-xs leading-5 ${
                  isDay ? "text-black" : "text-white"
                }`}
              >
                {frontend}
              </p>
            </div>
          )}
          {backend && (
            <div>
              <p
                className={`text-sm font-medium ${
                  isDay ? "text-slate-800" : "text-white"
                }`}
              >
                Backend
              </p>
              <p
                className={`italic text-xs leading-5 ${
                  isDay ? "text-black" : "text-white"
                }`}
              >
                {backend}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-10 ">
        {github && (
          <a
            href={github}
            target="_blank"
            className="hover:underline-offset-2 hover:underline"
          >
            <div className="flex gap-1 items-center ">
              <FaGithub
                width={20}
                height={20}
                className={isDay ? "text-slate-800" : "text-white"}
              />
              <p
                className={`font-medium ${
                  isDay ? "text-slate-800" : "text-white"
                }`}
              >
                GitHub
              </p>
            </div>
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            className="hover:underline-offset-2 hover:underline"
          >
            <div className="flex gap-1 items-center">
              <PiLinkSimpleBold
                className={isDay ? "text-slate-800" : "text-white"}
                style={{
                  width: 17,
                  height: 17,
                }}
              />
              <p
                className={`font-medium ${
                  isDay ? "text-slate-800" : "text-white"
                }`}
              >
                Link
              </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
