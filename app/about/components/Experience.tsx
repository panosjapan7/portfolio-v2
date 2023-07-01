import "./experience.css";

const Experience = () => {
  return (
    <div className="max-w-xl">
      <h2 className="font-semibold text-xl">Experience</h2>
      <div className="horizontal-line"></div>
      <div className="content-wrapper">
        <div style={{ height: "100%" }} className="mb-6 mt-4 pr-3 pl-2">
          <h3 className="font-medium text-lg">Moveat</h3>
          <p className="text-slate-600 text-sm tracking-wide">
            Dec. 2022 - May 2023
          </p>
          <p className=" italic text-sm mb-3" style={{ color: "#646464" }}>
            Frontend Web Developer
          </p>
          <p className="font-light mb-2 leading-5">
            <span className="font-medium">Moveat</span> is a multi-platform app
            selling taste tour tickets in Scandinavia.
          </p>
          <p className="font-light mb-2 leading-5">
            Using{" "}
            <span className="italic text-sm font-medium">
              React, React Native,
            </span>{" "}
            and <span className="italic text-sm font-medium">TypeScript,</span>{" "}
            I created dynamic content from{" "}
            <span className="italic text-sm font-medium">Figma</span> designs. I
            implemented features like checkout, database interaction, and
            utilized <span className="italic text-sm font-medium">React</span>{" "}
            packages for
            <span className="italic text-sm font-medium">
              Google static map
            </span>{" "}
            and <span className="italic text-sm font-medium">drag & drop</span>{" "}
            functionality.
          </p>
          <p className="font-light mb-2 leading-5">
            <span className="italic text-sm font-medium">Node</span> was used
            for backend connectivity and{" "}
            <span className="italic text-sm font-medium">Firebase</span> for
            database.
          </p>
        </div>
        <div style={{ height: "100%" }} className="mb-5 pr-3 pl-2">
          <h3 className="font-medium text-lg">Redmind internship</h3>
          <p className="text-slate-600 text-sm tracking-wide">
            Nov. 2022 - May 2023
          </p>
          <p className=" italic text-sm mb-3" style={{ color: "#646464" }}>
            Frontend Web Developer
          </p>
          <p className="font-light mb-2 leading-5">
            At <span className="font-medium">Redmind</span>, I served as mainly
            a frontend developer, collaborating closely with the design team to
            transform their{" "}
            <span className="italic text-sm font-medium">Figma</span> designs
            into visually engaging web and app screens using{" "}
            <span className="italic text-sm font-medium">ReactJS</span> and{" "}
            <span className="italic text-sm font-medium">React Native</span>.
          </p>
          <p className="font-light mb-2 leading-5">
            In addition, I built interactive features for web and mobile apps
            that required coding backend infrastructure using{" "}
            <span className="italic text-sm font-medium">Node</span> and{" "}
            <span className="italic text-sm font-medium">Firebase</span>.
          </p>
        </div>
        <div style={{ height: "100%" }} className="pr-3 pl-2 pb-10">
          <h3 className="font-medium text-lg">SVØRN</h3>
          <p className="text-slate-600 text-sm tracking-wide">
            Apr. 2014 - Dec. 2021
          </p>
          <p className=" italic text-sm mb-3" style={{ color: "#646464" }}>
            Self-employed
          </p>
          <p className="font-light mb-2 leading-5">
            As a self-employed entrepreneur, I successfully ran a men&apos;s
            luxury fashion accessories business.
          </p>
          <p className="font-light mb-2 leading-5">
            I utilized D2C and B2B sales, effective marketing, and oversaw
            manufacturing, design collaboration, and team assembly.
          </p>
          <p className="font-light mb-2 leading-5">
            I also created website mockups and marketing materials using{" "}
            <span className="italic text-sm font-medium">Photoshop</span> and{" "}
            <span className="italic text-sm font-medium">InDesign</span>.
          </p>
        </div>
      </div>
      <div className="fade-div"></div>
    </div>
  );
};

export default Experience;
