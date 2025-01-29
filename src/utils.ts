import { WeatherCondition } from "@/types/weather-conditions";
import WeatherIcon from "@icons/weather";

export const getUserLocation = (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (err) => {
        reject(err.message);
      }
    );
  });
};

const checkForError = async (response: Response) => {
  if (!response.ok) {
    throw new Error(response.status.toString());
  } else {
    const data = await response.json();
    return data;
  }
};

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  return checkForError(response);
};

// this can be updated in the future to include more weather icons
// if we keep using the same weather API will need to support the following options
// https://api.weather.gov/icons
export const getWeatherIcon = (condition: WeatherCondition) => {
  switch (condition) {
    case WeatherCondition.SKC:
      return WeatherIcon;
    case WeatherCondition.FEW:
      return WeatherIcon;
    case WeatherCondition.SCT:
      return WeatherIcon;
    case WeatherCondition.BKN:
      return WeatherIcon;
    case WeatherCondition.OVC:
      return WeatherIcon;
    case WeatherCondition.WIND_SKC:
      return WeatherIcon;
    case WeatherCondition.WIND_FEW:
      return WeatherIcon;
    case WeatherCondition.WIND_SCT:
      return WeatherIcon;
    case WeatherCondition.WIND_BKN:
      return WeatherIcon;
    case WeatherCondition.WIND_OVC:
      return WeatherIcon;
    case WeatherCondition.SNOW:
      return WeatherIcon;
    case WeatherCondition.RAIN_SNOW:
      return WeatherIcon;
    case WeatherCondition.RAIN_SLEET:
      return WeatherIcon;
    case WeatherCondition.SNOW_SLEET:
      return WeatherIcon;
    case WeatherCondition.FZRA:
      return WeatherIcon;
    case WeatherCondition.RAIN_FZRA:
      return WeatherIcon;
    case WeatherCondition.SNOW_FZRA:
      return WeatherIcon;
    case WeatherCondition.SLEET:
      return WeatherIcon;
    case WeatherCondition.RAIN:
      return WeatherIcon;
    case WeatherCondition.RAIN_SHOWERS:
      return WeatherIcon;
    case WeatherCondition.RAIN_SHOWERS_HI:
      return WeatherIcon;
    case WeatherCondition.TSRA:
      return WeatherIcon;
    case WeatherCondition.TSRA_SCT:
      return WeatherIcon;
    case WeatherCondition.TSRA_HI:
      return WeatherIcon;
    case WeatherCondition.TORNADO:
      return WeatherIcon;
    case WeatherCondition.HURRICANE:
      return WeatherIcon;
    case WeatherCondition.TROPICAL_STORM:
      return WeatherIcon;
    case WeatherCondition.DUST:
      return WeatherIcon;
    case WeatherCondition.SMOKE:
      return WeatherIcon;
    case WeatherCondition.HAZE:
      return WeatherIcon;
    case WeatherCondition.HOT:
      return WeatherIcon;
    case WeatherCondition.COLD:
      return WeatherIcon;
    case WeatherCondition.BLIZZARD:
      return WeatherIcon;
    case WeatherCondition.FOG:
      return WeatherIcon;
    default:
      return WeatherIcon;
  }
};

export const limitToTwoDecimals = (num: number) => Math.round(num * 100) / 100;
