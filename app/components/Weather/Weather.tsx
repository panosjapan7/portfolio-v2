import moment from "moment";
import "moment-timezone";
import { useEffect, useState } from "react";
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
        <div className="flex xl:-mt-16 gap-4 justify-center items-center lg:-mt-14 sm2:flex-col sm2:text-center sm3:flex-col sm3:text-center">
          <div>{weatherIcon}</div>
          <div>
            <div>
              <p style={{ color: "black" }}>
                <span className="text-3xl sm3:text-2x ">{weather?.temp}</span>
                <span className="text-1xl sm3:text-xl font-extralight mr-3">
                  C
                </span>
                <span className="text-2xl sm3:text-xl font-light">
                  {weather?.description}
                </span>
              </p>
            </div>
            <div className="ml-2">
              <p className="font-thin mt-2" style={{ color: "black" }}>
                Stockholm, Sweden
              </p>
              <p style={{ color: "black" }}>
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
      ) : (
        <div className="loaderContainer">
          <div className="line-2-vertical"></div>
        </div>
      )}
    </div>
  );
};

export default Weather;
