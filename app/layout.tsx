"use client";
import React from "react";
import MenuDesktop from "./components/MenuDesktop";
import moment from "moment";
import "moment-timezone";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export interface Params {}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  moment.locale("en");
  moment.tz.setDefault("Europe/Stockholm");
  const currentHour = moment().format("HH");
  let isDay = false;
  // if (+currentHour > 6 && +currentHour < 20) {
  //   isDay = true;
  // }

  const skyBackground: string = "sunny-day";
  const backgroundWeatherGradients: string[] = [
    "linear-gradient(180deg, rgba(196, 208, 232, 0.6) 0%, rgba(232, 218, 205, 0.6) 100%)",
    "linear-gradient(180deg, rgba(7, 22, 55, 0.6) 0%, rgba(185, 185, 185, 0.6) 100%)",
    "bg-gradient-to-b from-sunny-day-blue to-sunny-day-red",
  ];
  let background = "";
  if (isDay) {
    background = backgroundWeatherGradients[0];
  }
  if (!isDay) {
    background = backgroundWeatherGradients[1];
  }

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background: background,
          border: "white solid 6px",
          borderRadius: "12px",
        }}
      >
        <Header isDay={isDay} />
        <main>
          {children}

          {/* {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  ...child.props,
                  isDay: isDay,
                })
              : child
          )} */}
        </main>
        <div className="hidden lg:block">
          <MenuDesktop isDay={isDay} />
        </div>
      </body>
    </html>
  );
}
