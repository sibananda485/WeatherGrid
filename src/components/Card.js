import {
  faCloudRain,
  faTemperatureThreeQuarters,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Card({ data }) {
  return (
    <>
      <div className="bg-gray-100 p-3 space-y-8 shadow">
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            {new Date(data.dt * 1000).toLocaleDateString()}
          </p>
          <p className="text-green-500 font-semibold text-lg">
            {new Date(data.dt * 1000).toDateString().split(" ")[0]}
          </p>
        </div>
        <p className="text-4xl text-center font-semibold ">
          {(data.main.temp - 273.15).toPrecision(3)}° C
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-xl text-red-500"
              icon={faTemperatureThreeQuarters}
            />
            <div className="">
              <p>min {(data.main.temp_min - 273.15).toPrecision(3)}° C</p>
              <p>max {(data.main.temp_max - 273.15).toPrecision(3)}° C</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-cyan-500 " icon={faWind} />
            <div className="">
              <p>spe {data.wind.speed}</p>
              <p>deg {data.wind.deg}</p>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <FontAwesomeIcon icon={faCloudRain} />
          <p>{data.weather[0].description}</p>
        </div>
      </div>
    </>
  );
}
