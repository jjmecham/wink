import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import client from '../client'
import Link from 'next/link'
import groq from 'groq'
import { FaBeer } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })
const Home = () => {
  return (
      <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="home" />
      </Head>
      <div className={styles.main}>
        <h3 className={styles.title}>Welcome to Wink Tattoo</h3>
        <div className={styles.wrap}>
          <div className={styles.tl}>This is top left content</div>
          <div className={styles.tr}>This is top right content</div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.bl}>This is top left content</div>
          <div className={styles.br}>This is top right content</div>
        </div>
      </div>
        </>
     );
}
 
export default Home