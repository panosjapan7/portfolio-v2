import React from "react";
import Image from "next/image";
import MenuMobile from "./MenuMobile/MenuMobile";

const Header = () => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <div
          className={
            "flex items-center lg:pt-5 lg:gap-2 lg:ml-6 lg:flex-col lg:items-center lg:w-48 md:pt-8 md:ml-6 sm:justify-items-center sm:w-50 sm:flex-row sm:gap-4 sm:ml-6 sm:pt-8 pt-8 ml-6 gap-4 sm3:flex-col"
          }
        >
          <Image
            className="rounded-full mr-4"
            alt="Panos"
            src="/images/panos-2-square.jpg"
            width={50}
            height={50}
            style={{ marginRight: 0 }}
          />
          <div>
            <p className="font-normal text-base tracking-wide text-slate-800">
              Panos Tsapanidis
            </p>
            <p className="font-extralight text-sm tracking-wider text-slate-700">
              Frontend developer
            </p>
          </div>
        </div>

        <div className="lg:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
