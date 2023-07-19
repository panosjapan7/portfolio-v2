import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

import "./MenuMobile.css";

const DynamicPiLinkSimpleBold = dynamic(
  () => import("react-icons/pi").then((module) => module.PiLinkSimpleBold),
  { ssr: false }
);
const DynamicFaUser = dynamic(
  () => import("react-icons/fa").then((module) => module.FaUser),
  { ssr: false }
);
const DynamicFaHome = dynamic(
  () => import("react-icons/fa6").then((module) => module.FaHouse),
  { ssr: false }
);

const MenuMobile = ({ isDay }: { isDay: boolean }) => {
  const [activePage, setActivePage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const links = ["/", "/about", "/links"];
    const currentPath = window.location.pathname;
    const pageIndex = links.indexOf(currentPath);
    if (pageIndex !== -1) {
      setActivePage(pageIndex + 1);
    }
  }, []);

  const handleOptionClick = (optionIndex: number) => {
    setActivePage(optionIndex);
    setIsMenuOpen(false);
  };

  return (
    <div className="ms-nav-container">
      <ul className="ms-nav">
        <input
          type="checkbox"
          id="ms-menu"
          className="ms-menu-toggle"
          name="ms-menu-toggle"
          checked={isMenuOpen}
          onChange={(e) => setIsMenuOpen(e.target.checked)}
        />

        <li className="ms-li ms-li3 ms-li-last">
          <div onClick={() => handleOptionClick(3)}>
            <Link href="/links">
              <DynamicPiLinkSimpleBold
                className="icons"
                style={{
                  color:
                    activePage === 3
                      ? `${isDay ? "black" : "#f0f0f0"}`
                      : `${isDay ? "#9b9b9b" : "#c0bfbf"}`,
                }}
              />
            </Link>
          </div>
        </li>

        <li className="ms-li ms-li2">
          <div onClick={() => handleOptionClick(2)}>
            <Link href="/about">
              <DynamicFaUser
                className="icons"
                style={{
                  color:
                    activePage === 2
                      ? `${isDay ? "black" : "#f0f0f0"}`
                      : `${isDay ? "#9b9b9b" : "#c0bfbf"}`,
                }}
              />
            </Link>
          </div>
        </li>

        <li className="ms-li ms-li1 ms-li-first">
          <div onClick={() => handleOptionClick(1)}>
            <Link href="/">
              <DynamicFaHome
                className="icons"
                style={{
                  color:
                    activePage === 1
                      ? `${isDay ? "black" : "#f0f0f0"}`
                      : `${isDay ? "#9b9b9b" : "#c0bfbf"}`,
                }}
              />
            </Link>
          </div>
        </li>

        <li className="ms-main">
          <a>
            <label
              className="ms-menu-toggle-lbl"
              htmlFor="ms-menu"
              style={{ backgroundColor: isDay ? "#d2d2d2" : "#ececec" }}
            >
              <span className="fa fa-plus">
                <FaPlus
                  style={{
                    color: isDay ? "#f5f5f5" : "#9b9b9b",
                  }}
                />
              </span>
            </label>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
