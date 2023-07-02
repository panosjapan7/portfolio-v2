import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-xl">
      <div className="mb-6 max-w-xl">
        <h2 className="font-semibold text-lg text-slate-800">About Me</h2>
        <div style={{ border: "1px solid #dddddd", marginBottom: 8 }}></div>
        <p className="font-light mb-1">
          Fullstack developer with a focus on frontend.
        </p>
        <p className="font-light mb-1">
          I have a good eye for detail, a passion for user experience and I
          appreciate scalable and readable code.
        </p>
        <p className="font-light leading-5">
          I quickly embrace new technologies and approach challenges with a
          positive attitude while bringing a strong sense of responsibility and
          professionalism to every project.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-lg text-slate-800">Education</h2>
        <div style={{ border: "1px solid #dddddd", marginBottom: 8 }}></div>
        <p className="text-slate-800 text-sm font-semibold">
          Nackademin, Stockholm
        </p>
        <p className="text-slate-600 text-sm tracking-wide">2021-2023</p>
        <p className=" italic text-sm mb-3" style={{ color: "#646464" }}>
          Web Developer Fullstack Open Source
        </p>
        <p className="font-light mb-2 leading-5">
          The degree gives me broad skills in both backend and frontend
          development.
        </p>
        <p className="font-light mb-2 leading-5">
          We developed interactive web applications with{" "}
          <span className="italic text-sm font-medium">
            NodeJS, JavaScript/TypeScript, HTML, CSS,
          </span>{" "}
          along with <span className="italic text-sm font-medium">ReactJS</span>{" "}
          and <span className="italic text-sm font-medium"> EJS</span>. We
          mainly used{" "}
          <span className="italic text-sm font-medium">MongoDB</span> for our
          databases but also got ourselves acquainted with{" "}
          <span className="italic text-sm font-medium">MySQL</span>.
        </p>
        <p className="font-light leading-5">
          During my studies I’ve built a fullstack e-commerce application using
          <span className="italic text-sm font-medium">
            ReactJS, CSS, TypeScript, NodeJS,
          </span>{" "}
          and <span className="italic text-sm font-medium">MongoDB</span> and
          completed a 6-month internship at a software development company
          called <span className="text-sm font-medium">REDMIND</span> in
          Stockholm.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
