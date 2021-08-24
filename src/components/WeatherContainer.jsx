import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../store/actions/weatherAction";

import CitySelect from "./CitySelect";
import CurrentWeather from "./CurrentWeather";
import ForecastTable from "./ForecastTable";

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const { current } = weatherData;

  const cities = [
    {
      id: 6167865,
      name: "Toronto",
      country: "CA",
    },
    {
      id: 6094817,
      name: "Ottawa",
      country: "CA",
    },
    {
      id: 1850147,
      name: "Tokyo",
      country: "JP",
    },
  ];

  const handleSelect = (e) => {
    dispatch(getWeather(e.target.value));
  };

  return (
    <article className="mx-auto min-w-screen-sm max-w-screen-lg p-5">
      <h1 className="text-3xl text-blue-500 mb-5">Weather Forecast</h1>
      <section className="grid grid-cols-1">
        <CitySelect cities={cities} handleSelect={handleSelect} />
        {!current?.weather && (
          <p className="text-small text-gray-400">
            Please select a city to see the current weather
          </p>
        )}
        <CurrentWeather />
        <ForecastTable />
      </section>
    </article>
  );
};

export default WeatherContainer;
