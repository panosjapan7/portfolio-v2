import { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";
import Image from "next/image";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import "./weather.css";
import Thunderstorm from "./conditions/Thunderstorm";
import Clear from "./conditions/Clear";
import Clouds from "./conditions/Clouds";
import Drizzle from "./conditions/Drizzle";
import Rain from "./conditions/Rain";
import Snow from "./conditions/Snow";

interface Weather {
  temp: number;
  description: string;
  mainCondition: string;
}

const Weather = () => {
  const weatherApiKey = process.env.WEATHER_API_KEY;
  moment.locale("en");
  moment.tz.setDefault("Europe/Stockholm");

  const [weather, setWeather] = useState<Weather>();
  const [loading, setLoading] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState<JSX.Element | null>(null);

  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=59.32&lon=18.06&appid=3d9017dc9dd85e435a6750e8872239c4&units=metric`
    );
    const data = await res.json();
    let capitalizedDescription = "";

    if (data) {
      console.log({ data });
      capitalizedDescription = data.weather[0].description
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    setWeather({
      temp: Math.round(data.main.temp),
      description: capitalizedDescription,
      mainCondition: data.weather[0].main,
    });

    setWeatherImage(data.weather[0].main);
    setLoading(false);
  };

  const setWeatherImage = (mainCondition: string | undefined) => {
    if (mainCondition === "Clear") {
      setWeatherIcon(<Clear />);
    } else if (mainCondition === "Thunderstorm")
      setWeatherIcon(<Thunderstorm />);
    else if (mainCondition === "Clouds") setWeatherIcon(<Clouds />);
    else if (mainCondition === "Drizzle") setWeatherIcon(<Drizzle />);
    else if (mainCondition === "Rain") setWeatherIcon(<Rain />);
    else if (mainCondition === "Snow") setWeatherIcon(<Snow />);
    else setWeatherIcon(<Clear />);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather-wrapper">
      {!loading ? (
        <>
          <div className="flex xl:-mt-16 gap-4 justify-center items-center lg:-mt-14 sm2:flex-col sm2:text-center sm3:flex-col sm3:text-center weather-card">
            <div className="card-icon">{weatherIcon}</div>
            <div>
              <p className="text-sm font-semibold">My Location</p>
              <div>
                <p className="" style={{ color: "black" }}>
                  Stockholm, Sweden
                </p>
              </div>
              <div className="mt-2">
                <p style={{ color: "black" }}>
                  <span className="sm3:text-2x ">{weather?.temp}</span>
                  <span className="text-xs sm3:text-md font-extralight mr-3">
                    {" "}
                    C
                  </span>
                  <span className="text-sm sm3:text-lg font-light">
                    {weather?.description}
                  </span>
                </p>
                <p className="text-sm">
                  <span className="font-thin mr-2.5">
                    {moment().format("MMMM D YYYY")}
                  </span>
                  <span className="mr-2.5">|</span>
                  <span className="tracking-widest font-extralight">
                    {moment().format("H:mm a")}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:-mt-16 justify-center lg:-mt-14 sm2:flex-col sm2:text-center sm3:flex-col sm3:text-center weather-card">
            <div className="card-icon">
              <Image
                src="/images/project-adidas-icon.svg"
                width={90}
                height={90}
                alt="star shape"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">My Latest Project</p>
            </div>
            <div>
              <div>
                <p>adidas Landing Page</p>
              </div>
              <div className="mt-2">
                <p className="font-thin italic text-sm">
                  CSS, Framer Motion, GSAP, React, TypeScript
                </p>
              </div>
              <div className="flex gap-5 mt-3 sm2:justify-center sm3:justify-center">
                <a
                  href="https://github.com/panosjapan7/adidas-project"
                  target="_blank"
                  className="text-sm hover:underline-offset-2 hover:underline"
                >
                  <div className="flex gap-1 items-center ">
                    <FaGithub
                      width={20}
                      height={20}
                      className="text-slate-800"
                    />
                    <p className="font-medium text-slate-800">GitHub</p>
                  </div>
                </a>
                <a
                  href="https://adidas-project.vercel.app"
                  target="_blank"
                  className="text-sm hover:underline-offset-2 hover:underline"
                >
                  <div className="flex gap-1 items-center">
                    <PiLinkSimpleBold
                      className="text-slate-800"
                      style={{
                        width: 17,
                        height: 17,
                      }}
                    />
                    <p className="font-medium text-slate-800">Link</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loaderContainer">
          <div className="line-2-vertical"></div>
        </div>
      )}
    </div>
  );
};

export default Weather;
