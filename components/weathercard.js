import React from 'react'
import { Card } from 'primereact/card'
// import styles from '../styles/Weathercard.module.css'
import styles from '../styles/Home.module.css'

const WeatherCard = ({ props }) => {
  const conditions = props.data.weather.currentConditions
  const weather = props.data.weather
  const clothing = props.data

  const weathers = weather.days.map((day) => {
    return (
      <Card
        key={day.datetime}
        className={styles.card}
      >
        <div>
          <h4>{day.datetime} </h4>
          Expect it to feel: {day.feelslike}*F
          <br />
          High: {day.tempmax}*F Low: {day.tempmin}*F
          <br />
          Conditions: {day.conditions}

        </div>
      </Card>
    )
  })

  // const alerts = weather.alerts.map((alert) => {
  //   return (
  //     <><h1>Weather alerts for your trip</h1>
  //     <Card
  //       className={styles.card}
  //       key={alert.id}
  //     >
  //       <p>{alert.headline}</p>
  //       <br />
  //       <p>{alert.description}</p>
  //     </Card>
  //     </>
  //   )
  // })
  return (
    <>
      {/* {alerts} */}
      <h1>Packing Recommendations</h1>
      <p>There are {clothing.coldcount} days that will feel cold for you</p>
      <p>There are {clothing.warmcount} days that will feel warm for you</p>
      <p>There are {clothing.raincount} days with rain in the forecast</p>
      <p>There are {clothing.snowcount} days with snow in the forecast</p>


      <h1>Your Trip Forecast</h1>
      <div className={styles.grid}>
        {weathers}
      </div>
    </>
  )
}

export default WeatherCard
