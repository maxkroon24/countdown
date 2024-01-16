import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {
  const newYears = "1 Jan 2025";
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
useEffect(() => {
  const interval = setInterval(() => {
    const newYearsDate = new Date(newYears);
    const currentdate = new Date();
  const TotalSeconds = (newYearsDate - currentdate) / 1000;
    setDays(Math.floor(TotalSeconds / 3600 /24))
    setHours(Math.floor(TotalSeconds / 3600) % 24)
    setMinutes(Math.floor(TotalSeconds / 60) % 60)
    setSeconds(Math.floor(TotalSeconds) % 60)
  }, 1000)

  return () => {
    clearInterval(interval)
  }
}, [])
  return (
    <>
    <img src="/bram-naus-JKtKXGN5BSU-unsplash.jpg" alt="" />
  <div className="h1-container">
    <h1>New Years Eve</h1>
  </div>
  <div className="countdown-container">
    <div className="countdown-days">
      <h3 className="days-number" id="days">
        {days}
      </h3>
      <span className="days">Days</span>
    </div>
    <div className="countdown-hours">
      <h3 className="hours-number" id="hours">
        {hours}
      </h3>
      <span className="hours">Hours</span>
    </div>
    <div className="countdown-minutes">
      <h3 className="minutes-number" id="minutes">
        {minutes}
      </h3>
      <span className="minutes">Minutes</span>
    </div>
    <div className="countdown-seconds">
      <h3 className="seconds-number" id="seconds">
        {seconds}
      </h3>
      <span className="seconds">Seconds</span>
    </div>
  </div>   
  </>
  )
}
