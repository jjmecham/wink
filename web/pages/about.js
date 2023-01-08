import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import client from '../client'
import Link from 'next/link'
import groq from 'groq'

const inter = Inter({ subsets: ['latin'] })
const Home = () => {
  return (
      <>
      <Head>
        <title>About</title>
        <meta name="keywords" content="about" />
      </Head>
      <div className={styles.main}>
        <h3 className={styles.title}>Wink Tattoo started in 2022...</h3>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti nisi perferendis debitis reiciendis laboriosam, facilis deleniti iusto enim totam repellat reprehenderit. Neque inventore error explicabo saepe non vero praesentium.</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti nisi perferendis debitis reiciendis laboriosam, facilis deleniti iusto enim totam repellat reprehenderit. Neque inventore error explicabo saepe non vero praesentium.</p>
      </div>
        </>
     );
}
 
export default Home