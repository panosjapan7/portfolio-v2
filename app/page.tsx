"use client";
import moment from "moment";
import "moment-timezone";
import Weather from "./components/Weather/Weather";

export default function Home() {
  moment.locale("en");
  moment.tz.setDefault("Europe/Stockholm");
  const currentHour = moment().format("HH");

  return (
    <main>
      <Weather />
    </main>
  );
}
