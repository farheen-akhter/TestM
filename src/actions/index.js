import axios from 'axios';

export const fetchWeatherData=(city)=> async dispatch=>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8d229d09d6101321548ed8b303f739e6`);
    console.log(response.data)
    dispatch({ type: 'FETCH_WEATHER', payload: response.data });
}
