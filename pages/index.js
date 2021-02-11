import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home () {
  const location = useState('')
  const coldtemp = useState(0)
  const firstday = useState('')
  const lastday = useState('')

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

      </main>

    </div>
  )
}
