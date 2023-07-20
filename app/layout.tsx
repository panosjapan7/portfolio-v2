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

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background:
            "linear-gradient(180deg, rgba(196, 208, 232, 0.6) 0%, rgba(232, 218, 205, 0.6) 100%)",
          border: "white solid 6px",
          borderRadius: "12px",
        }}
      >
        <Header />
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
          <MenuDesktop />
        </div>
      </body>
    </html>
  );
}
