import Navbar from '../components/widgets/navbar/Navbar'
import Cards from '../components/speaker/Card'
import styles from '../styles/2024.module.css'
import { tedx2025 } from '../components/constants/constants'
import Image from 'next/image'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'
import Timeline from '../components/timeline/Timeline'

export default function Edition5 () {

  return (
    <>
      <Navbar />
        <div className={styles.yearcontainer}>   
            <div className={styles.yearouter}>
              <div className={styles.yeartext} data-aos='fade-up-right'>
                <h2>TEDx VIT 2025</h2>
                <p>
                TEDxVIT 2025 is 5<sup>th</sup> edition of TedX Talks organized by TEDxVIT, and is scheduled to take place on March 22<sup>nd</sup>, 2025 with the theme "The Alchemy of Change".
                </p>
                <p>
                Alchemy is an ancient philosophical tradition that aimed to transform matter, most famously through the pursuit of turning base metals like lead into precious metals like gold. Rooted in both spiritual and material pursuits, alchemy combined elements of chemistry, metallurgy, astrology, medicine, and mysticism. 
                </p>
                <p>
                "The Alchemy of Change" explores the profound process of turning life's challenges into opportunities for growth and transformation. Drawing inspiration from the ancient practice of alchemy, this talk delves into how we can harness the power of change—both personally and collectively—to achieve resilience, innovation, and ultimately, a more fulfilling life. By viewing change not as a threat but as a catalyst for progress, we can learn to navigate uncertainty with confidence and purpose.
                </p>
                <a href='TEDx-Booklet-2025.pdf' target='_blank'>
                <button className={styles.yearlocation}>
                  Brochure
                </button>
                </a>
                {/* <a href='https://konfhub.com/tedxvit2025' target='_blank'>
                <button className={styles.yearlocation}>
                    Get Tickets
                </button>
                </a> */}
              </div>
              <div className={styles.yearimg} data-aos='fade-up-left'>
                <Image
                  src='new_alchemy.png'
                  layout='fill'
                  objectFit='contain'
                  alt='imgRight'
                />
              </div>
            </div>
            <div className={styles.speaktitle}>
                <h2>Speakers</h2>
            </div>
            <div className={styles.speakers}>
                <div className={styles.cards}>
                    {tedx2025.map((data, key) => (
                    <div data-aos='flip-up' data-aos-delay='300'>
                        <Cards
                        name={data.name}
                        key={key}
                        img={data.img}
                        designation={data.designation}
                        talk={data.talk}
                        type='View Talk'
                        />
                    </div>
                    ))}
                </div>
            </div>
          {/* <Timeline/> */}
        </div>
      <MiniFooter/>
    </>
  )
}