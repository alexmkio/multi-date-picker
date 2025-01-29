"use client";

import Image from "next/image";
import { useState, useEffect, createElement } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Bell from "@icons/bell";
import Gear from "@icons/gear";
import Pin from "@icons/pin";
import Stock from "@icons/stock";
import CloseIcon from "@icons/close";
import OmniOneLogo from "@/public/images/Omni-One-Logo-Gradient.svg";
import Logo from "@icons/logo";
import RPLogo from "@/public/images/RP-Logo.svg";
import Jeremy from "@/public/images/jeremy.png";
import HamburgerMenuIcon from "@icons/hamburger";
import StarIcon from "@/public/images/star-logo.svg";
import { WeatherCondition } from "@/types/weather-conditions";
import { PolygonResponse } from "@/types/polygon-response";
import {
  fetchData,
  getUserLocation,
  getWeatherIcon,
  limitToTwoDecimals,
} from "../utils";

export default function Header() {
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<string | null>(null);
  const [weatherCondition, setWeatherCondition] =
    useState<WeatherCondition | null>(null);
  const [stockData, setStockData] = useState<PolygonResponse | null>(null);
  const [stockChange, setStockChange] = useState<number | null>(null);
  const [stockChangePercent, setStockChangePercent] = useState<number | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpenLeft, setIsDrawerOpenLeft] = useState(false);
  const isAnyDrawerOpen = isDrawerOpen || isDrawerOpenLeft || isPinnedOpen;

  // Add or remove `overflow-hidden` on the body element when drawers are open
  useEffect(() => {
    if (isDrawerOpen || isDrawerOpenLeft) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen, isDrawerOpenLeft]);

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        const { latitude, longitude } = await getUserLocation();
        const roundedLat = Number(latitude.toFixed(4));
        const roundedLng = Number(longitude.toFixed(4));
        const weatherMetadata = await fetchData(
          `https://api.weather.gov/points/${roundedLat},${roundedLng}`
        );
        const weatherForecast = await fetchData(
          weatherMetadata?.properties?.forecastHourly
        );
        setTemperature(weatherForecast?.properties?.periods[0]?.temperature);
        setTemperatureUnit(
          weatherForecast?.properties?.periods[0]?.temperatureUnit
        );
        const weatherConditionKey =
          weatherForecast?.properties?.periods[0]?.icon
            .split("/")
            .pop()
            ?.split("?")[0]
            .split(",")[0];
        setWeatherCondition(
          WeatherCondition[
            weatherConditionKey.toUpperCase() as keyof typeof WeatherCondition
          ]
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchLocationAndWeather();
  }, []);

  useEffect(() => {
    const fetchStockInfo = async () => {
      try {
        const response = await fetch(`/api/stock?ticker=G`);
        const data: PolygonResponse = await response.json();
        const rawChange = data?.results[0]?.c - data?.results[0]?.o;
        const rawPercentChange = (rawChange / data?.results[0]?.o) * 100;
        setStockData(data);
        setStockChange(limitToTwoDecimals(rawChange));
        setStockChangePercent(limitToTwoDecimals(rawPercentChange));
      } catch (err) {
        console.log(err);
      }
    };

    fetchStockInfo();
  }, []);

  return (
    <header className="fixed w-full bg-very-dark-gray z-50 border-b rounded-bl-[8px] rounded-br-[8px] px-4 sm:px-6 sm:py-[15px]">
      <div className="flex items-center justify-between w-full h-full">
        {/* Mobile Hamburger Menu */}
        <button
          className="flex md:hidden"
          onClick={() => setIsDrawerOpenLeft(!isDrawerOpenLeft)}
        >
          <HamburgerMenuIcon />
        </button>

        {isAnyDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
              setIsDrawerOpen(false);
              setIsDrawerOpenLeft(false);
              setIsPinnedOpen(false);
            }}
          />
        )}

        {/* Desktop Stock Prices and Weather */}
        <div className="items-center space-x-4 hidden md:flex flex-1 basis-0">
          {temperature ? (
            <div className="flex items-center space-x-2">
              {weatherCondition
                ? createElement(getWeatherIcon(weatherCondition))
                : null}
              <span className="text-soft-red">
                {temperature}º{temperatureUnit}
              </span>
            </div>
          ) : null}
          <div className="flex items-center space-x-1">
            <div className="flex flex-wrap">
              {stockData ? (
                <span className="flex items-center text-cyan">
                  <Stock />
                  NYSE: G ${stockData?.results[0].c}
                </span>
              ) : null}
              {stockChange && stockChangePercent ? (
                <span className="text-[#B2B2B2] pl-1">
                  {stockChange} ({stockChangePercent}%)
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {/* Mobile Star Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          <a href="/home" className="flex items-center">
            <StarIcon className="w-[73px] h-[70.894px]" />
          </a>
        </div>

        {/* Centered Logo */}
        <div className="margin:auto hidden md:block flex-1 basis-0">
          <NavigationMenu.Root asChild>
            <a href="/home" className="flex items-center">
              <div className="border-r pr-[18px]">
                <RPLogo />
              </div>
              <OmniOneLogo />
            </a>
          </NavigationMenu.Root>
        </div>

        {/* Saved Pins Button */}
        <div className="flex items-center gap-[14px]">
          {/* Desktop: Dropdown for saved pins */}
          <div className="relative hidden md:block">
            <button
              className="size-[35px] flex items-center justify-center"
              onClick={() => setIsPinnedOpen(!isPinnedOpen)}
            >
              <Pin />
            </button>
            {isPinnedOpen && (
              <div className="absolute right-[-45px] top-9 mt-2 w-[200px] md:w-[534px] bg-light-grayish-blue rounded-md p-4 z-50">
                <div className="bg-light-grayish-blue absolute right-10 top-[-10px] w-[34px] h-[34px] rotate-[-135deg] rounded-br-[8px]"></div>
                {/* <MySavedPins /> */}
              </div>
            )}
          </div>
          <button className="size-[35px] items-center justify-center hidden md:flex">
            <Bell />
          </button>
          <button className="size-[35px] items-center justify-center hidden md:flex">
            <Gear />
          </button>
          <button className="hidden md:flex size-[35px] rounded-full items-center justify-center headshot-border">
            <div className="size-[33px] relative overflow-hidden rounded-full">
              <Image
                src={Jeremy}
                alt="user icon"
                fill={true}
                className="object-cover"
              />
            </div>
          </button>

          {/* Mobile: Drawer for saved pins */}
          <div className="relative md:hidden">
            <button
              className="size-[35px] flex items-center justify-center"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <Pin />
            </button>
            {/* Drawer */}
            <div
              className={`fixed top-0 right-0 w-[377px] h-full bg-very-dark-gray z-50 transform transition-transform ${
                isDrawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-4 pt-[40px]">
                <div className="flex justify-between w-[100%]">
                  <span className="text-[22px] font-bold leading-none text-white">
                    My Saved Pins
                  </span>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-white text-xl mb-4"
                  >
                    <CloseIcon className="text-soft-red w-[20px] h-[20px]" />
                  </button>
                </div>
                {/* <MySavedPins /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Drawer (Hamburger Menu) */}
      <div
        className={`fixed top-0 left-0 w-[377px] h-full bg-very-dark-gray z-50 transform transition-transform duration-300 ${
          isDrawerOpenLeft ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center p-4 pt-[40px]">
            <button
              onClick={() => setIsDrawerOpenLeft(false)}
              className="text-white text-xl mr-4"
            >
              <CloseIcon className="text-soft-red w-[20px] h-[20px]" />
            </button>
            <span className="text-[22px] font-bold leading-none text-white">
              Menu
            </span>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 p-4 space-y-4">
            <ul>
              <li className="flex gap-2 items-center text-white pt-4 mb-[24px]">
                <button className="flex size-[23px] rounded-full items-center justify-center bg-light-gray">
                  <div className="size-[21px] relative overflow-hidden rounded-full">
                    <Image
                      src={Jeremy}
                      alt="user icon"
                      fill={true}
                      className="object-cover"
                    />
                  </div>
                </button>
                Profile
              </li>
              <li className="flex gap-2 items-center text-white mb-[24px]">
                <button className="w-[23px] h-[35px] flex justify-center items-center">
                  <Bell className="w-[18px] h-[23.68px]" />
                </button>
                Notifications
              </li>
              <li className="flex gap-2 items-center text-white mb-[24px]">
                <button className="w-[23px] h-[35px] flex justify-center items-center">
                  <Gear />
                </button>
                Settings
              </li>
            </ul>
            <hr className="my-4 border-gray-500" />
            <div className="flex justify-center text-white">
              <div className="flex items-center w-full space-x-2 bg-[#393838] rounded-md px-4 py-2 mr-2">
                <div className="flex flex-wrap">
                  {stockData ? (
                    <p className="flex text-xs font-bold leading-none text-cyan">
                      <Stock />
                      NYSE: G ${stockData?.results[0].c}
                    </p>
                  ) : null}
                  {stockChange && stockChangePercent ? (
                    <p className="text-xs font-bold leading-none text-[#B2B2B2] pl-1">
                      {stockChange} ({stockChangePercent}%)
                    </p>
                  ) : null}
                </div>
              </div>
              {temperature ? (
                <div className="flex items-center w-full space-x-2 bg-[#393838] rounded-md px-4 py-2">
                  {weatherCondition
                    ? createElement(getWeatherIcon(weatherCondition))
                    : null}
                  <span className="text-soft-red text-sm font-bold leading-normal">
                    {temperature}º{temperatureUnit}
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto p-4 text-left">
            <div className="flex items-center">
              <div className="border-r pr-[18px]">
                <RPLogo />
              </div>
              <Logo />
            </div>
            <span className="text-[#7F7F7F] text-[12px] font-normal leading-normal">
              &copy; All Rights Reserved Footer 2025 Rightpoint LLC. Information
              etc.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
