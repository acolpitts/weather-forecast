import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getForecast } from "../store/actions/weatherAction";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.weather);

  const handleForecast = (id) => {
    dispatch(getForecast(id));
  };

  return (
    <>
      {current?.weather && (
        <section className="mt-5">
          <p className="text-gray-500 text-2xl">{current.weather[0].main}</p>
          <p className="text-gray-700 text-1xl mb-5">
            {current.weather[0].description}
          </p>
          <p className="text-gray-500 text-2xl">
            {Math.round(current.main.temp - 273)} ºC
          </p>
          <p className="text-gray-700 text-1xl mb-5">
            Wind {current.wind.speed} m/s
          </p>
          <button
            type="button"
            className="px-7 py-3 bg-blue-500 text-white"
            onClick={() => {
              handleForecast(current.id);
            }}
          >
            See Forecast
          </button>
        </section>
      )}
    </>
  );
};

export default CurrentWeather;
