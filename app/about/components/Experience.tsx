import "./experience.css";

const Experience = () => {
  return (
    <div className="page-content-wrapper">
      <div className="md3:ml-6 md3:mr-4 md3:mt-5 max-w-xl">
        <div className="experience-content-wrapper">
          <div className="md3:pr-3 mb-6 max-w-xl">
            <h2 className="font-semibold text-lg text-black">Experience</h2>
            <div
              style={{
                border: "1px solid  #dddddd",
                marginBottom: 8,
              }}
            ></div>
          </div>
          <div className="md3:pr-3 pr-3 pl-2 mb-6">
            <h3 className="font-medium text-lg text-black">Moveat</h3>
            <p className="text-sm tracking-wide text-gray-600">
              Dec. 2022 - May 2023
            </p>
            <p className="italic text-sm mb-3 text-gray-600">
              Frontend Web Developer
            </p>
            <p className="font-light mb-2 leading-5 text-black">
              Moveat is a multi-platform app selling taste tour tickets in
              Scandinavia.
            </p>
            <p className="font-light mb-2 leading-5 text-black">
              Using{" "}
              <span className="italic text-sm font-medium">
                React, React Native,
              </span>{" "}
              and <span className="italic text-sm font-medium">TypeScript</span>
              , I created dynamic content from{" "}
              <span className="italic text-sm font-medium">Figma</span> designs.
              I implemented features like checkout, database interaction, and
              utilized <span className="italic text-sm font-medium">React</span>{" "}
              packages for{" "}
              <span className="italic text-sm font-medium">
                Google static map
              </span>{" "}
              and{" "}
              <span className="italic text-sm font-medium">drag & drop </span>
              functionality.
            </p>
            <p className="font-light leading-5 text-black mb-2">
              During my studies I’ve built a fullstack e-commerce application
              using
              <span className="italic text-sm font-medium">
                ReactJS, CSS, TypeScript, NodeJS,
              </span>{" "}
              and <span className="italic text-sm font-medium">MongoDB</span>{" "}
              and completed a 6-month internship at a software development
              company called{" "}
              <span className="text-sm font-medium">REDMIND</span> in Stockholm.
            </p>
            <p className="font-light leading-5 text-black">
              <span className="italic text-sm font-medium">Node</span> was used
              for backend connectivity and{" "}
              <span className="italic text-sm font-medium">Firebase</span> for
              database.
            </p>
          </div>
          <div className="md3:pr-3 pr-3 pl-2 mb-6">
            <h3 className="font-medium text-lg text-black">
              Redmind internship
            </h3>
            <p className="text-sm tracking-wide text-gray-600">
              Nov. 2022 - May 2023
            </p>
            <p className="italic text-sm mb-3 text-gray-600">
              Frontend Web Developer
            </p>
            <p className="font-light mb-2 leading-5 text-black">
              At <span className="font-medium">Redmind</span>, I served as
              mainly a frontend developer, collaborating closely with the design
              team to transform their{" "}
              <span className="italic text-sm font-medium">Figma</span> designs
              into visually engaging web and app screens using{" "}
              <span className="italic text-sm font-medium">ReactJS</span> and{" "}
              <span className="italic text-sm font-medium">React Native</span>.
            </p>

            <p className="font-light leading-5 text-black">
              In addition, I built interactive features for web and mobile apps
              that required coding backend infrastructure using{" "}
              <span className="italic text-sm font-medium">Node</span> and{" "}
              <span className="italic text-sm font-medium">Firebase</span>.
            </p>
          </div>
          <div className="md3:pr-3 pr-3 pl-2">
            <h3 className="font-medium text-lg text-black">SVØRN</h3>
            <p className="text-sm tracking-wide text-gray-600">
              Apr. 2014 - Dec. 2021
            </p>
            <p className="italic text-sm mb-3 text-gray-600">Self-employed</p>
            <p className="font-light mb-2 leading-5 text-black">
              As a self-employed entrepreneur, I successfully ran a men&apos;s
              luxury fashion accessories business.
            </p>
            <p className="font-light mb-2 leading-5 text-black">
              I utilized D2C and B2B sales, effective marketing, and oversaw
              manufacturing, design collaboration, and team assembly.
            </p>

            <p className="font-light leading-5 text-black">
              I also created website mockups and marketing materials using{" "}
              <span className="italic text-sm font-medium">Photoshop</span> and{" "}
              <span className="italic text-sm font-medium">InDesign</span> .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
