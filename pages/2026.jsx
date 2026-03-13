import Link from 'next/link'
import Navbar from '../components/widgets/navbar/Navbar'
import Cards from '../components/speaker/Card'
import styles from '../styles/2024.module.css'
import Image from 'next/image'
import { tedx2026 } from '../components/constants/constants'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'
import Timeline from '../components/timeline/Timeline'

export default function Edition6 () {
  return (
    <>
      <Navbar />
        <div className={styles.yearcontainer}>   
            <div className={styles.yearouter}>
              <div className={styles.yeartext} data-aos='fade-up-right'>
                <h2>TEDx VIT 2026</h2>
                <p>
                TEDxVIT 2026 is the 6<sup>th</sup> edition of TedX Talks organized by TEDxVIT, and is scheduled to take place on March 28<sup>nd</sup>, 2026 with the theme "Touching The Soul"
                </p>
                <p>
                Defined as “the immaterial, immortal essence or spiritual principle of a living being, often considered the seat of personality, intellect, and emotion” , the soul is a core part of the human experience, and the universe itself. Through the theme Touching The Soul, we explore the depth and length of the ways that simple actions create profound, lasting ripples across across multiple avenues of life.
                </p>
                <p>
                Through TEDxVIT 2026, we aim to foster a discussion on diverse perspectives and thought processes, while revelling in the beauty of compassion, tales of achievements against all odds, and acts of benevolence. This journey isn't simply about big, cinematic moments but it's about the quiet resonance found in a sincere conversation, a helping hand, or a moment of shared silence. It is an invitation to live more deeply and to recognize the sacredness in the ordinary.
                </p>
                {/* <a href='TEDx-Booklet-2025.pdf' target='_blank'>
                <button className={styles.yearlocation}>
                  Brochure
                </button>
                </a> */}
                <Link href='/handle-booking'>
                <button className={styles.yearlocation}>
                    Get Tickets
                </button>
                </Link>
              </div>
              <div className={styles.yearimg} data-aos='fade-up-left'>
                <Image
                  src='2026-logo.png'
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
                    {tedx2026.map((data, key) => (
                    <div data-aos='flip-up' data-aos-delay='300'>
                        <Cards
                        name={data.name}
                        key={key}
                        img={data.img}
                        designation={data.designation}
                        talk={data.talk}
                        type='View Profile'
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