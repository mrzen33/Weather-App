"use client";
import { useState } from "react";
import cloudy from '@/cloudy.jpg';
import sunny from '@/sunny.jpg';
import rainy from '@/rainy.jpg';

interface AppProps {
  setBackground: Function
  children: React.ReactNode
}
// Weatherstack API
const key = '2566593392ed1de1e33a94d98e523c72';

export default function App({ setBackground }: AppProps) {
  const api_url = `https://api.weatherstack.com/current?access_key=${key}&query=`;
  const [location, setLocation] = useState('');
  const [info, setInfo] = useState({
    location: {
      name: '',
      country: '',
    },
    current: {
      weather_descriptions: [''],
      temperature: '',
      humidity: '',
      wind_speed: '',
    }
  });
  const [disp, setDisp] = useState('none');
  const [description, setDescription] = useState(<></>);
  const getWeatherInfo = async () => {
  
    try {
      const res = await fetch(`${api_url}${location}`);
      const data = await res.json();
      if (data.success === false) {
        alert('Not found');
        return;
      }
      setInfo(data);
      setDisp('block');
      if (data.current.weather_descriptions[0].toLowerCase().includes('sun')) {
        setDescription((<svg xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" className="bi bi-sun fs-1" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>));
        setBackground(`url(${sunny.src})`);
      } else if (data.current.weather_descriptions[0].toLowerCase().includes('rain')) {
        setDescription((<svg xmlns="http://www.w3.org/2000/svg" width="1em"  fill="currentColor" className="bi bi-cloud-rain fs-1" viewBox="0 0 16 16">
          <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"/>
        </svg>));
        setBackground(`url(${rainy.src})`);
      } else if (data.current.weather_descriptions[0].toLowerCase().includes('cloud')) {
        setDescription((<svg xmlns="http://www.w3.org/2000/svg" width="1em" fill="currentColor" className="bi bi-cloudy fs-1" viewBox="0 0 16 16">
          <path d="M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973M8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 5.5"/>
        </svg>));
        setBackground(`url(${cloudy.src})`);
      }
     
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="vw-100 vh-100">
      <div className="d-flex justify-content-center">
        <h1 className="mt-4">Weather App</h1>
      </div>
      <div className="m-5"></div>
      <div className="d-flex justify-content-center mt-4">
        <div className="col-md-2">
          <input onChange={(e)=>setLocation(e.target.value)} className="form-control" placeholder="Search weather for a city..."/>
        </div>
        <div className="m-1"></div>
        <div>
          <button onClick={getWeatherInfo} type="button" className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>

      </div>

      <div className="d-flex justify-content-center mt-4">
        {Object.keys(info).length !== 0 ? <>
          <div style={{display: disp}}>
            <div className="text-center">
            <h3>{info.location.name}, {info.location.country}</h3>
            </div>
            <div className="text-center">
              <p className="fs-4">{info.current.weather_descriptions[0]}</p>
              <div className="mb-4">{description}</div>
            </div>
            
            <div className="d-flex justify-content-center flex-sm-row flex-column">
              <div className="card text-center" style={{minWidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Temperature</h5>
                  <p className="card-text">{info.current.temperature}°C</p>
                </div>
              </div>
              <div className="m-2"></div>
              <div className="card text-center" style={{minWidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Humidity</h5>
                  <p className="card-text">{info.current.humidity}%</p>
                </div>
              </div>
              <div className="m-2"></div>
              <div className="card text-center" style={{minWidth: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Wind Speed</h5>
                  <p className="card-text">{info.current.wind_speed}km/h</p>
                </div>
              </div>

            </div>
           
          </div>
    
        </>: null}
      </div>

    </div>
  );
}