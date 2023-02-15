import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function Weather() {
    const apiKey = "<YOUR-API-KEY>";
    const baseURL = "http://api.weatherapi.com/v1";

    const [area, setArea] = useState('Lahore');

    const { isLoading, error, data, isFetching, refetch } = useQuery("repoData", () =>
    axios.get(
        baseURL+'/current.json',
        {
            params: {
                key: apiKey, q:area
            }
        }
        ).then((res) => res.data)
    );

    const findWeather = async () => {
        refetch();
    };

    // if (isLoading) return "Loading...";
    // if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <input type="search" onChange={(e) => setArea(e.target.value)} placeholder="Enter Place Name" />
            <button onClick={findWeather}>Find Weather</button>
            <div>
                {isLoading && "Loading..."}
                {error && "An error has occurred: " + error.message}
                {data && (
                    <>
                        <p>Results for: {data.location.name}</p>
                        <strong>{data.current.temp_c}</strong> <sup>°C</sup>
                        <div>{isFetching ? "Updating..." : ""}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Weather;
