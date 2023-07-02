import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectMern = () => {
  return (
    <ProjectItem
      projectTitle="MERN + Firebase Authorization"
      description={[
        "A web app boilerplate that allows the user to register and log in by using Firebase Authentication with email/password or Google OAuth.",
      ]}
      features={[
        "The user receives an email to verify their email address.",
        "The user can reset their password.",
        "The app uses a backend server to create a user entry on MongoDB that includes among other properties a default 'user' role.",
        "To add an 'admin' role to a user, you need to manually edit the user entry on MongoDB.",
        'The screen "Admin Page (protected)" can be viewed only if the logged-in user has an "admin" role; if not, it redirects back to Home page.',
      ]}
      frontend="Firebase Auth, React JS, TypeScript"
      backend="Firebase Auth, MongoDB, Node JS, TypeScript"
      github="https://github.com/panosjapan7/mern-firebase-auth"
    />
  );
};

export default ProjectMern;
