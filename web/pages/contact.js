import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Contact.module.css'
import client from '../client'
import Link from 'next/link'
import groq from 'groq'
import { FaBeer } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })
const Home = () => {
  return (
      <>
      <Head>
        <title>Contact</title>
        <meta name="keywords" content="Contact" />
      </Head>
      <div className={styles.main}>
        <h3 className={styles.title}>Contact Wink Tattoo</h3>
        <div class="col-lg-8 col-lg-offset-2 text-center">

        <p>We are located in New Port Richey, FL 34653</p>

        </div>
            <p>813-454-5942</p>
        <div class="col-lg-4 text-center">
            <i class="fa fa-envelope-o fa-3x wow fadeIn"></i>
            <p><a href="mailto:gleamgraphics@gmail.com">gleamgraphics@gmail.com</a></p>

        </div>

        <div class="col-lg-8 col-lg-offset-2 text-center">


            <a href="https://www.linkedin.com/in/jeremymecham" ><i class="fa fa-2x fa-linkedin-square wow bounceIn text-primary"></i></a>

            <a href="https://twitter.com/jeremymecham" class="margin20left"><i class="fa fa-2x fa-twitter-square wow bounceIn text-primary"></i></a>

            <a href="https://www.pinterest.com/jeremy0174/" class="margin20left"><i class="fa fa-2x fa-pinterest-square wow bounceIn text-primary"></i></a>

            <a href="https://www.youtube.com/channel/UCLkF2VWJTkYIqOb-fXJtsyQ" class="margin20left"><i class="fa fa-2x fa-youtube-square wow bounceIn text-primary"></i></a>

            <a href="https://github.com/jjmecham" class="margin20left"><i class="fa fa-2x fa-brands fa-github-square wow bounceIn text-primary"></i></a>

            <a href="https://www.facebook.com/jeremyjmecham" class="margin20left"><i class="fa fa-2x fa-facebook-square wow bounceIn text-primary"></i></a>

        </div>

    </div>
        </>
     );
}
 
export default Home