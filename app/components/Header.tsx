import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div
        className={
          "flex items-center lg:gap-2 p-5 lg:flex-col lg:items-center lg:w-48 sm:justify-items-center sm:w-50 sm:flex-row sm:gap-4"
        }
      >
        <Image
          className=" rounded-full mr-4"
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
    </header>
  );
};

export default Header;
