import { useState } from "react"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";

export default function SearchBox({ onSearch }) {
  let [city, setCity] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);   
      setCity("");      
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          required
        />
        <br /><br />
        <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}
