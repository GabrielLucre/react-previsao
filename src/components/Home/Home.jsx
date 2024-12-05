import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
import WeatherInfo5Days from '../WeatherInfo5Days/WeatherInfo5Days'
import './Home.css'

function Home() {
  const [weather, setWeather] = useState(null)
  const [weather5Days, setWeather5Days] = useState(null)
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = import.meta.env.VITE_API_KEY

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5Days.data)
  }

  return (
    <div className='container'>
      <h1>Previsão de Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInfo weatherData={weather} />}
      {weather5Days && <WeatherInfo5Days weatherData5Days={weather5Days} />}
    </div>
  )
}

export default Home
