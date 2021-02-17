import React from 'react'
import { Card } from 'primereact/card'
// import styles from '../styles/Weathercard.module.css'
import styles from '../styles/Home.module.css'

const WeatherCard = ({ props }) => {
  const weathers = props.data.weather.days.map((day) => {
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

  const alerts = props.data.weather.alerts.map((alert) => {
    return (
      <Card
        className={styles.card}
        key={alert.id}
      >
        {alert.headline}
        <br />
        {alert.description}
        <br />
        {alert.ends}
        <br />
        {/* {alert.event} */}
        {/* {alert.id} */}
        {alert.link}
      </Card>
    )
  })
  return (
    <>
      <h1>Current Conditions in {props.data.weather.address}</h1>
      {alerts}
      <h1>Your Trip ForeCast</h1>
      <div className={styles.grid}>
        {weathers}
      </div>
    </>
  )
}

export default WeatherCard
