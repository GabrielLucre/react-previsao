import { PropTypes } from 'prop-types'
import './WeatherInfo5Days.css'

const WeatherInfo5Days = ({ weatherData5Days }) => {
    let dailyForecast = {}

    for (let forecast of weatherData5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const next5Days = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric' }).replace(',', '')

        return newDate
    }

    return (
        <div className='weather-container'>
            <h3>Previsão para os próximos 5 dias</h3>
            <div className='weather-list'>
                {next5Days.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={forecast.name} />
                        <p className='forecast-desc'>{forecast.weather[0].description}</p>
                        <div className='forecast-temp'>
                            <p>{Math.round(forecast.main.temp_max)}°C<span>↑</span></p>
                            <p>{Math.round(forecast.main.temp_min)}°C<span>↓</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

WeatherInfo5Days.propTypes = {
    weatherData5Days: PropTypes.object.isRequired
}

export default WeatherInfo5Days