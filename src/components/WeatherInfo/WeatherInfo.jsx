import { PropTypes } from 'prop-types'
import './WeatherInfo.css'

const WeatherInfo = ({ weatherData }) => {
    return (
        <div className='weather-container'>
            <h2>{weatherData.name}</h2>
            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.name} />
                <p className='temp'>{Math.round(weatherData.main.temp)}°C</p>
            </div>
            <p className='desc'>{weatherData.weather[0].description}</p>
            <div className='detail'>
                <p>Sensação térmica: {Math.round(weatherData.main.feels_like)}°C</p>
                <p>Umidade: {weatherData.main.humidity}%</p>
            </div>
        </div>
    )
}

WeatherInfo.propTypes = {
    weatherData: PropTypes.object.isRequired
}

export default WeatherInfo