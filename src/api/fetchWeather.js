import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '09da56e2849b85828d11fb6d134fd334';

export const fetchWeather = async query => {
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units: 'metric',
            appid: API_KEY
        }
    });

    return data;
}

