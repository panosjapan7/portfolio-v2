import moment from "moment";
import "moment-timezone";
import { useEffect, useState } from "react";
import "./weather.css";

interface Weather {
  temp: number;
  description: string;
}

const Weather = () => {
  const weatherApiKey = process.env.WEATHER_API_KEY;
  moment.locale("en");
  moment.tz.setDefault("Europe/Stockholm");

  const [weather, setWeather] = useState<Weather>();

  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=59.32&lon=18.06&appid=3d9017dc9dd85e435a6750e8872239c4&units=metric`
    );
    const data = await res.json();
    let capitalizedDescription = "";

    if (data) {
      capitalizedDescription = data.weather[0].description
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }

    setWeather({
      temp: Math.round(data.main.temp),
      description: capitalizedDescription,
    });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <main>
      <div className="content-wrapper flex justify-center text-center">
        <div className="flex flex-col items-center xl:-mt-16 lg:-mt-14">
          <div className="sun-container"></div>
          <div>
            <p className="mt-20 ">
              <span className="text-4xl mr-0.5">{weather?.temp}</span>
              <span className="text-2xl font-extralight mr-3">C</span>
              <span className="text-2xl font-light">
                {weather?.description}
              </span>
            </p>
            <p className="font-thin mt-2 ">Stockholm, Sweden</p>
          </div>
          <div className="mt-8">
            <p>
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
    </main>
  );
};

export default Weather;
