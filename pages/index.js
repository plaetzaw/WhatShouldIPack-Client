import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextField from '@material-ui/core/TextField'
import Calendar from 'react-calendar'
import Button from '@material-ui/core/Button'
import 'react-calendar/dist/Calendar.css'

// import ClothingCard from '../components/clothingcard'
// import WeatherCard from '../components/weathercard'

export default function Home () {
  const [location, setLocation] = useState('')
  const [coldtemp, setColdTemp] = useState(0)
  const [firstday, onChange] = useState(new Date())
  const [lastday, onChange2] = useState(new Date())
  // const [firstday, setFirstDay] = useState(null)
  // const [lastday, setLastDay] = useState('')

  // console.log('Updating Arrival Date to' + firstday)
  // console.log('Updating Departure Date to' + lastday)

  const onSubmit = () => {
    const packObj = {
      location: location,
      cold: coldtemp,
      firstday: firstday,
      lastday: lastday
    }
    console.log(packObj)
    axios.post('http://localhost:8080/search', packObj)
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>WhatShouldIPack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to WhatShouldIPack!
        </h1>
        <div className={styles.description}>
          <h2> Tomorrow you are leaving on a week long trip, and you haven't even started packing yet!
          </h2>
          <p>We've got you covered</p>

        </div>
        <br />
        <span>What is your destination?</span>
        <TextField
          label='Destination'
          variant='outlined'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br />
        <span>What Temperature do you feel cold at?</span>
        <TextField
          label='Temperate *F'
          type='number'
          InputLabelProps={{
            shrink: true
          }}
          variant='filled'
          value={coldtemp}
          onChange={(e) => setColdTemp(e.target.value)}
        />
        <br />
        <span>What is your Arrival Date?</span>
        <Calendar
          // label='Departure Date'
          value={firstday}
          onChange={onChange}
        />
        <br />
        <span>What is your Departure Date?</span>
        <Calendar
          value={lastday}
          onChange={onChange2}
        />
        <br />
        {location}
        <br />
        {coldtemp}*F
        <br />
        <Button variant='contained' color='primary' onClick={onSubmit}>
          Submit
        </Button>
        {/* <ClothingCard />
        <WeatherCard /> */}
      </main>
      <form />
    </div>
  )
}
