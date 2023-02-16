import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Template from "./Template";

function Weather() {
    const apiKey = "ee00b3b78ab14f53aa5205616231302";
    const baseURL = "http://api.weatherapi.com/v1";
    const [area, setArea] = useState('');
    const [result, setResult] = useState({});
    const { isLoading, error, data, isFetching, refetch } = useQuery("repoData", () => {
        if (area) {
            return axios.get(
                baseURL+'/current.json',
                {
                    params: {
                        key: apiKey, q:area
                    }
                }
            ).then((res) => {
                setResult(res.data);
                return res.data;
            }).catch(setResult({}));
        }
    });
    const findWeather = async () => {
        refetch();
    };

    return (
        <Template setArea={setArea} findWeather={findWeather} isLoading={isLoading}
            isFetching={isFetching} error={error} data={result} />
    );
}

export default Weather;
