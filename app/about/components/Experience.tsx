import "./experience.css";

const Experience = ({ isDay }: { isDay: boolean }) => {
  return (
    <div className="max-w-xl md3:p-5">
      <h2
        className={`font-semibold text-lg ${
          isDay ? "text-black" : "text-slate-100"
        } `}
      >
        Experience
      </h2>
      <div
        className="horizontal-line"
        style={{
          border: `1px solid ${isDay ? "#dddddd" : "#ededed"} `,
        }}
      ></div>
      <div className="content-wrapper">
        <div style={{ height: "100%" }} className="mb-6 mt-4 pr-3 pl-2">
          <h3
            className={`font-medium text-lg ${
              isDay ? "text-black" : "text-slate-100"
            } `}
          >
            Moveat
          </h3>
          <p
            className={`text-sm tracking-wide ${
              isDay ? "text-slate-600" : "text-gray-300"
            } `}
          >
            Dec. 2022 - May 2023
          </p>
          <p
            className={`italic text-sm mb-3 ${
              isDay ? "text-slate-500" : "text-gray-300"
            } `}
          >
            Frontend Web Developer
          </p>
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
            <span className="font-medium">Moveat</span> is a multi-platform app
            selling taste tour tickets in Scandinavia.
          </p>
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
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
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
            <span className="italic text-sm font-medium">Node</span> was used
            for backend connectivity and{" "}
            <span className="italic text-sm font-medium">Firebase</span> for
            database.
          </p>
        </div>
        <div style={{ height: "100%" }} className="mb-5 pr-3 pl-2">
          <h3
            className={`font-medium text-lg ${
              isDay ? "text-black" : "text-slate-100"
            } `}
          >
            Redmind internship
          </h3>
          <p
            className={`text-sm tracking-wide ${
              isDay ? "text-slate-600" : "text-gray-300"
            } `}
          >
            Nov. 2022 - May 2023
          </p>
          <p
            className={`italic text-sm mb-3 ${
              isDay ? "text-slate-500" : "text-gray-300"
            } `}
          >
            Frontend Web Developer
          </p>
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
            At <span className="font-medium">Redmind</span>, I served as mainly
            a frontend developer, collaborating closely with the design team to
            transform their{" "}
            <span className="italic text-sm font-medium">Figma</span> designs
            into visually engaging web and app screens using{" "}
            <span className="italic text-sm font-medium">ReactJS</span> and{" "}
            <span className="italic text-sm font-medium">React Native</span>.
          </p>
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
            In addition, I built interactive features for web and mobile apps
            that required coding backend infrastructure using{" "}
            <span className="italic text-sm font-medium">Node</span> and{" "}
            <span className="italic text-sm font-medium">Firebase</span>.
          </p>
        </div>
        <div style={{ height: "100%" }} className="pr-3 pl-2 pb-10">
          <h3
            className={`font-medium text-lg ${
              isDay ? "text-black" : "text-slate-100"
            } `}
          >
            SVØRN
          </h3>
          <p
            className={`text-sm tracking-wide ${
              isDay ? "text-slate-600" : "text-gray-300"
            } `}
          >
            Apr. 2014 - Dec. 2021
          </p>
          <p
            className={`italic text-sm mb-3 ${
              isDay ? "text-slate-500" : "text-gray-300"
            } `}
          >
            Self-employed
          </p>
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
            As a self-employed entrepreneur, I successfully ran a men&apos;s
            luxury fashion accessories business.
          </p>
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
            I utilized D2C and B2B sales, effective marketing, and oversaw
            manufacturing, design collaboration, and team assembly.
          </p>
          <p
            className={`font-light mb-2 leading-5 ${
              isDay ? "text-black" : "text-gray-200"
            }`}
          >
            I also created website mockups and marketing materials using{" "}
            <span className="italic text-sm font-medium">Photoshop</span> and{" "}
            <span className="italic text-sm font-medium">InDesign</span>.
          </p>
        </div>
      </div>
      {/* <div
        className="fade-div"
        style={{
          background: isDay
            ? "linear-gradient(181.79deg,rgba(236, 232, 229, 0.29) 28.51%, rgba(237, 232, 228) 73.46%)"
            : "linear-gradient(181.79deg, rgba(189, 190, 194, 0.5) 28.51%, rgba(196, 197, 200, 1) 100%)",
        }}
      ></div> */}
    </div>
  );
};

export default Experience;
