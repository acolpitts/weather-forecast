import {
  RESET_WEATHER,
  GET_WEATHER,
  GET_FORECAST,
  WEATHER_ERROR,
} from "../types";

const initialState = {
  loading: false,
  current: null,
  forecast: null,
  error: null,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_WEATHER:
      return {
        ...state,
        current: null,
        forecast: null,
        loading: false,
      };
    case GET_WEATHER:
      return {
        ...state,
        current: action.payload,
        forecast: null,
        loading: false,
      };
    case GET_FORECAST:
      return {
        ...state,
        forecast: action.payload,
        loading: false,
      };
    case WEATHER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default weatherReducer;
