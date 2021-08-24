import axios from "axios";
import {
  RESET_WEATHER,
  GET_WEATHER,
  GET_FORECAST,
  WEATHER_ERROR,
} from "../types";

export const getWeather = (id) => async (dispatch) => {
  if (id === "reset") {
    dispatch({
      type: RESET_WEATHER,
      payload: {},
    });
    return;
  }

  const ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=538882fc8387290c6cee83f313a6acf5`;
  try {
    const res = await axios.get(ENDPOINT);
    dispatch({
      type: GET_WEATHER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: WEATHER_ERROR,
      payload: error,
    });
  }
};

export const getForecast = (id) => async (dispatch) => {
  const ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=538882fc8387290c6cee83f313a6acf5`;
  try {
    const res = await axios.get(ENDPOINT);
    dispatch({
      type: GET_FORECAST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: WEATHER_ERROR,
      payload: error,
    });
  }
};
