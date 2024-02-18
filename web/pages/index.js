import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import client from '../client'
import Link from 'next/link'
import groq from 'groq'
import { FaBeer } from 'react-icons/fa';

// const inter = Inter({ subsets: ['latin'] })
const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="home" />
      </Head>
      <div className={styles.main}>
        <div className={styles.row}>
          <div className={styles.tl}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              corrupti nisi perferendis debitis reiciendis laboriosam, facilis
              deleniti iusto enim totam repellat reprehenderit. Neque inventore
              error explicabo saepe non vero praesentium.
            </p>
          </div>

          <div className={styles.tr}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              corrupti nisi perferendis debitis reiciendis laboriosam, facilis
              deleniti iusto enim totam repellat reprehenderit. Neque inventore
              error explicabo saepe non vero praesentium.
            </p>
          </div>
        </div>
      

      <div className={styles.row}>
          <div className={styles.bl}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              corrupti nisi perferendis debitis reiciendis laboriosam, facilis
              deleniti iusto enim totam repellat reprehenderit. Neque inventore
              error explicabo saepe non vero praesentium.
            </p>
          </div>

          <div className={styles.br}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              corrupti nisi perferendis debitis reiciendis laboriosam, facilis
              deleniti iusto enim totam repellat reprehenderit. Neque inventore
              error explicabo saepe non vero praesentium.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Home