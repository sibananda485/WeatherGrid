import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";

export default function Main() {
  const { city } = useParams(); //Getting params
  const [loading, setLoading] = useState(false); //To conditionaly show skeletons
  const [location, setLocation] = useState(null); //To show the location in the title after getting data from getGeoLocation()
  const [search, setSearch] = useState(""); //FormState for search input
  const [data, setData] = useState([]); //Weather data state
  const [error, setError] = useState(null); //To show error in case of any

  // Function to get longitude and latitude from city name
  const getGeoLocation = async (city) => {
    try {
      if (!city) {
        const res = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        );
        return await res.json();
      } else {
        const res = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        );
        return await res.json();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  // Function to get  weather data by longitude and latitude
  const getForecast = async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    setData(data);
  };

  // handleSubmit function to call both functions on form submit
  const handleSubmit = async (city) => {
    setLocation(null);
    setData([]);
    setLoading(true);
    try {
      const geoData = await getGeoLocation(city);
      if (geoData.length == 0) {
        setError("City not found!");
      } else {
        setLocation(geoData);
        await getForecast(geoData[0].lat, geoData[0].lon);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setSearch("");
  };

  // To get weather data when some params available in url
  useEffect(() => {
    if (city) {
      handleSubmit(city);
    } else {
      setData([]);
      setLocation(null);
    }
  }, [city]);

  return (
    <div className="min-h-screen max-w-7xl mx-auto my-10 space-y-3 px-4 xl:px-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-center my-16 sm:my-20">
        Weather Forecast for 5 days
      </h1>
      {error && <p className="text-center text-red-600">{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col sm:flex-row justify-center gap-3"
      >
        <input
          value={search}
          required
          onChange={(e) => {
            setError(null);
            setSearch(e.target.value);
          }}
          type="text"
          name="location"
          id="location"
          className="w-full sm:w-1/2 block border px-2 py-2 rounded-md border-blue-200 bg-blue-50 text-xl focus:outline-none focus:border-blue-500"
          placeholder="Enter for a city"
        />
        <button
          type="submit"
          className="bg-blue-600 py-2 text-lg text-white px-3 rounded-md"
        >
          Get weather
        </button>
      </form>
      {loading ? (
        <h1 className="text-lg lg:text-3xl font-bold text-center py-10">
          Result for '{search || city}'
        </h1>
      ) : (
        location && (
          <h1 className="text-lg lg:text-2xl font-semibold text-center py-10">
            Result for '{location[0].name},{location[0].state},
            {location[0].country}'
          </h1>
        )
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading
          ? [1, 2, 3, 4, 5].map(() => <Skeleton></Skeleton>)
          : data.list &&
            data.list
              .filter((data) => {
                return data.dt_txt.split(" ")[1] === "00:00:00";
              })
              .map((data) => {
                return <Card data={data}></Card>;
              })}
      </div>
    </div>
  );
}
