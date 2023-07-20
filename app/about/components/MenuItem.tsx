import React, { useState } from "react";
import Image from "next/image";
interface MenuItemI {
  itemValue: string;
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
  image: string;
  imageAlt: string;
  menuText: string;
  imageWidth: number;
  imageHeight: number;
}
const MenuItem = ({
  itemValue,
  selectedTab,
  setSelectedTab,
  image,
  imageAlt,
  menuText,
  imageWidth,
  imageHeight,
}: MenuItemI) => {
  return (
    <div
      className={`flex items-center gap-2 mb-4 relative cursor-pointer pt-2 pb-2 pl-3 pr-3  ${
        selectedTab === itemValue
          ? "cursor-default rounded-lg bg-slate-100"
          : "cursor-pointer"
      }`}
      onClick={() => setSelectedTab(itemValue)}
    >
      <Image
        className={`rounded border border-white z-10`}
        src={`/images/${image}`}
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt}
      />

      <p className="text-xs font-medium z-10 text-black ">{menuText}</p>
    </div>
  );
};

export default MenuItem;
