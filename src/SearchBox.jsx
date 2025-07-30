import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";

export default function SearchBox ({ updateInfo }){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d21ec79749152a47d9a15049cc7a5c13";

    let getWeatherInfo = async () => {
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        let result = {
          city: city,
          lon : jsonResponse.coord.lon,
          lat : jsonResponse.coord.lat,
          temp : jsonResponse.main.temp,
          temp_Min : jsonResponse.main.temp_min,
          temp_Max : jsonResponse.main.temp_max,
          humidity : jsonResponse.main.humidity,
          feels_Like : jsonResponse.main.feels_like,
          weather : jsonResponse.weather[0].description,
        }
        // console.log(result);
        return result;
      }catch (err){
        throw err;
      }
    }
    
    let handleChange = (evt) =>{
      setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try{
          evt.preventDefault();
          setCity("");
          let newInfo = await getWeatherInfo();
          updateInfo(newInfo);
        }catch(err){
          setError(true)
        }
    };
    
    return (
        <div className='SearchBox'>
          <form onSubmit={handleSubmit}>
            <TextField 
                id="city" 
                label="City Name" 
                value={city}
                onChange={handleChange}
                variant="outlined" 
                required
            /> 
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
          </form>
          {error && <p style={{color: "red"}}>NO SUCH PLACE EXIST !</p>}
        </div>
      )
}