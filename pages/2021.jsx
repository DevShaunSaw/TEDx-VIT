import Navbar from '../components/widgets/navbar/Navbar'
import Cards from '../components/speaker/Card'
import styles from '../styles/2024.module.css'
import { tedx2021 } from '../components/constants/constants'
import Image from 'next/image'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'

export default function Edition4 () {

  return (
    <>
      <Navbar />
        <div className={styles.yearcontainer}>
            <div className={styles.yearouter}>
              <div className={styles.yeartext} data-aos='fade-up-right'>
                <h2>TEDx VIT 2021</h2>
                <p>
                TEDx VIT 2021 was the 3<sup>rd</sup> edition of TedX Talks organized by tedX VIT, and took place in May 2021 with the theme "Epiphany"
               </p>
                <p>
                Epiphany is the moment when a character is suddenly struck with a life changing realization which changes the rest of the story. Through this theme, we aim to showcase how such pivotal moments, impacted the lives of some of the most brilliant minds of our city and nation.
                </p>
                <a href='TEDxVIT-Booklet-2021_Compressed.pdf' target='_blank'>
                <button className={styles.yearlocation}>
                    Brochure
                </button>
                </a>
              </div>
              <div className={styles.yearimg} data-aos='fade-up-left'>
                <Image
                  src='./x2.jpg'
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
                    {tedx2021.map((data) => (
                        <div data-aos='flip-up' data-aos-delay='300'>
                            <Cards
                            name={data.name}
                            img={data.img}
                            designation={data.designation}
                            talk={data.talk}
                            type='View Talk'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      <MiniFooter/>
    </>
  )
}