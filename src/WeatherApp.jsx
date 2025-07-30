import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        lat : "28.6667",
        lon : "77.2167",
        city : "Delhi",
        feels_Like : 24.84,
        temp : 25.05,
        temp_Min :25.05, 
        temp_Max :25.05,
        humidity : 47,
        weather : "haze"
    })

    let updateInfo = (NewInfo) => {
        setWeatherInfo(NewInfo)
    }
 
    return (
        <div style={{textAlign: "center"}}>

            <h1 style={{color: "Blue"}}>Weather App For You</h1>

            <SearchBox updateInfo={updateInfo}/> 

            <InfoBox info={weatherInfo}/> 
            
        </div>
    )
}