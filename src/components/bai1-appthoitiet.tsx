import React, { useState } from 'react';
import axios from 'axios';

interface WeatherData {
  temperature: string;
  weatherDesc: string;
}

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchWeather = async () => {
    if (!city) {
      alert("Hãy nhập tên một thành phố");
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://wttr.in/${city}?format=j1`);
    
      const currentWeather = response.data.current_condition[0];
      const weatherData: WeatherData = {
        temperature: currentWeather.temp_C,
        weatherDesc: currentWeather.weatherDesc[0].value,
      };

      setWeather(weatherData);
    } catch (err) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Bài 1: Thời tiết</h1>
      
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố"
      />
      <button onClick={fetchWeather} disabled={loading}>
        Xem
      </button>
      {loading && <p>Đang load...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && city&& (
        <div>
          <h2>Thời tiết của {city}</h2>
          <p>Nhiệt độ: {weather.temperature}°C</p>
          <p>{weather.weatherDesc}</p>
        </div>
      )}
    </div>
  );
};

export default App;
