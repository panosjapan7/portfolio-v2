import React from "react";
import Image from "next/image";
import Link from "next/link";
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
}

const ProjectItem: React.FC<ProjectItem> = ({
  projectTitle,
  description,
  features,
  frontend,
  backend,
  github,
  link,
}) => {
  return (
    <div className="max-w-xl">
      <div className="mb-5 max-w-xl">
        <h2 className="font-semibold text-lg text-slate-800">{projectTitle}</h2>
        <div style={{ border: "1px solid #dddddd", marginBottom: 8 }}></div>
        {description.map((paragraph, index) => (
          <p key={index} className="font-light mb-1 pt-1 leading-5">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mb-5">
        <p className="font-semibold text-slate-800 mb-1">Features</p>
        <ul className="list-disc ml-6">
          {features.map((feature, index) => (
            <li className="text-sm mb-1" key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <p className="font-semibold text-slate-800 mb-1">
          Tools & Technologies
        </p>
        <div
          className={`grid ${
            frontend && backend ? "grid-cols-2" : "grid-cols-1"
          }  gap-3`}
        >
          {frontend && (
            <div>
              <p className="text-sm font-medium text-slate-800">Frontend</p>
              <p className="italic text-xs leading-5">{frontend}</p>
            </div>
          )}
          {backend && (
            <div>
              <p className="text-sm font-medium text-slate-800">Backend</p>
              <p className="italic text-xs leading-5">{backend}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-10 ">
        <a
          href="https://www.google.com"
          target="_blank"
          className="hover:underline-offset-2 hover:underline"
        >
          <div className="flex gap-1 items-center ">
            <FaGithub width={20} height={20} className="text-slate-800" />
            <p className="font-medium text-slate-800">GitHub</p>
          </div>
        </a>

        <a
          href="https://www.google.com"
          target="_blank"
          className="hover:underline-offset-2 hover:underline"
        >
          <div className="flex gap-1 items-center">
            <PiLinkSimpleBold
              className="text-slate-800"
              style={{
                width: 17,
                height: 17,
              }}
            />
            <p className="font-medium text-slate-800">Link</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
