//FORM SUBMIT WWW.FORMSUBMIT.CO/EMAIL-LINK

import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Contact.module.css'
import client from '../client'
import Link from 'next/link'
import groq from 'groq'
import { FaBeer } from 'react-icons/fa';

// const inter = Inter({ subsets: ['latin'] })
const Home = () => {
  return (
      <>
      <Head>
        <title>Contact</title>
        <meta name="keywords" content="Contact" />
      </Head>
      <div className={styles.main}>
        <h3 className={styles.title}>Contact Myth & Muse Tattoo</h3>

            <div class="row  justify-content-center">

                <div class="col-lg-6">
                    <form id="contact-form" name="contact-form"
                        action="https://formsubmit.co/el/vaziho?subject=GLEAM+GRAPHICS+WEBSITE+MESSAGE" method="POST" >

                        <input type="text" name="_honey" style={{display:'none'}} />


                        <input type="hidden" name="_next" value="https://eliteprime.store/success.html" />


                        <div class="row">


                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control" required />
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control" required />
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>


                        </div>

                        {/* <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control" required />
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div> */}

                        <div class="row">


                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2"
                                        class="form-control md-textarea" required></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>

                        <div class="text-center">
                            <button class="btn send" type="submit">Send</button>
                        </div>
                    </form>

                   <div class="text-center text-md-left">
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                        <div class="status"></div> 
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home