import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectProfile = () => {
  return (
    <ProjectItem
      projectTitle="Portfolio Website"
      description={[
        "I’ve always approached minimal design in a very clean and clinical way so I wanted to explore a minimal direction that has warmth to it.",
      ]}
      features={[
        "The user receives an email to verify their email address.",
        "The user can reset their password.",
        "The app uses a backend server to create a user entry on MongoDB that includes among other properties a default 'user' role.",
        "To add an 'admin' role to a user, you need to manually edit the user entry on MongoDB.",
        'The screen "Admin Page (protected)" can be viewed only if the logged-in user has an "admin" role; if not, it redirects back to Home page.',
      ]}
      frontend={
        "Figma, Framer Motion, Next JS, Tailwind, TypeScript, Weather API"
      }
      github="https:/www.google.com"
      link="https:/www.google.com"
    />
  );
};

export default ProjectProfile;
