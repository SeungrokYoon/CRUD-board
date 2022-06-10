import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.card}>
      <Head>{'Hello, this is About Page'}</Head>
      <h2>About</h2>
    </div>
  )
}

export default About
