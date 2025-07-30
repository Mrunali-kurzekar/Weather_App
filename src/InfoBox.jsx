import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";//image from unsplash

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return (
        <div className="InfoBox">
            <div className="card-container">
                <Card sx={{ maxWidth: 345, border: "5px, solid lightBlue" }} variant='outlined' >
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 85 ? RAIN_URL : info.temp < 15 ? COLD_URL : HOT_URL}
                        title="city-image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 85 ? < ThunderstormIcon/> : info.temp > 15 ? < WbSunnyIcon/> : <AcUnitIcon />} 
                             <p>{info.lat}&deg;N, {info.lon}&deg;E</p>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature: {info.temp}&deg;C </p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Min Temp: {info.temp_Min}&deg;C </p>
                        <p>Max Temp: {info.temp_Max}&deg;C </p>
                        <p>Weather can be describe as {<b><i>{info.weather}</i></b>} and feels like {info.feels_Like}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card> 
            </div>
        </div>
    )
}