import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import "./aboutMobileMenu.css";

const AboutMobileMenu = () => {
  const [selected, setSelected] = useState("about-me");

  const handleOptionClick = (option: string) => {
    setSelected(option);
  };

  return (
    <div className="flex gap-9 flex-wrap p-2 relative">
      <div
        className={`option-container ${
          selected === "about-me" ? "active" : ""
        }`}
        onClick={() => setSelected("about-me")}
      >
        <FaUser
          style={{
            height: "16px",
            width: "16px",
            marginTop: -4,
            color: "#9B9B9B",
          }}
        />
        <h2 className="text-base" style={{ color: "#9B9B9B" }}>
          About Me
        </h2>
      </div>

      <div
        className={`option-container ${
          selected === "projects" ? "active" : ""
        }`}
        onClick={() => setSelected("projects")}
      >
        <IoDocumentsOutline
          style={{
            height: "18px",
            width: "18px",
            marginTop: 0,
            color: "#9B9B9B",
          }}
        />
        <h2 className="text-base" style={{ color: "#9B9B9B" }}>
          Projects
        </h2>
      </div>
    </div>
  );
};

export default AboutMobileMenu;
