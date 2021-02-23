import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextField from '@material-ui/core/TextField'
import Calendar from 'react-calendar'
import Button from '@material-ui/core/Button'
import 'react-calendar/dist/Calendar.css'

// import ClothingCard from '../components/clothingcard'
import WeatherCard from '../components/weathercard'

export default function Home () {
  const [location, setLocation] = useState('')
  const [coldtemp, setColdTemp] = useState(0)
  const [firstday, onChange] = useState(new Date())
  const [lastday, onChange2] = useState(new Date())
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = () => {
    const packObj = {
      location: location,
      cold: coldtemp,
      firstday: firstday,
      lastday: lastday
    }
    console.log(packObj)
    axios.post('https://whatshouldipack.herokuapp.com/search/', packObj)
      .then((res) => {
        setIsPending(false)
        setData(res)
        setError(null)
        console.log(data)
      })
      .catch(err => {
        setIsPending(false)
        setError(err.message)
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>WhatShouldIPack</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to WhatShouldIPack!
        </h1>
        <div className={styles.description}>
          <p>Do you have a trip coming up?</p>
          <p>And no idea what to pack?</p>
          <p>We've got you covered</p>

        </div>
        <br />
        <span>Destination or Zipcode</span>
        <br/>
        <TextField
          label='Destination'
          variant='outlined'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br />
        <span>What Temperature do you feel cold at?</span>
        <br/>
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
        <Button variant='contained' color='primary' onClick={onSubmit}>
          Help Me Pack!
        </Button>
      </main>
      <form />
      {error && <div><h1>{error}</h1></div>}
      {isPending && <div>Loading Search Results!</div>}
      {data && <WeatherCard props={data} />}

    </div>
  )
}
