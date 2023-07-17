"use client";
import moment from "moment";
import "moment-timezone";
import Weather from "./components/Weather/Weather";

export default function Home() {
  moment.locale("en");
  moment.tz.setDefault("Europe/Stockholm");
  const currentHour = moment().format("HH");
  let isDay = false;
  // if (+currentHour > 6 && +currentHour < 20) {
  //   isDay = true;
  // }

  return (
    <main>
      <Weather isDay={isDay} />
    </main>
  );
}
