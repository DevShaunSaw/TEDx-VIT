import Navbar from '../components/widgets/navbar/Navbar'
import Cards from '../components/speaker/Card'
import styles from '../styles/2024.module.css'
import { tedx2024 } from '../components/constants/constants'
import Image from 'next/image'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'

export default function Edition4 () {

  return (
    <>
      <Navbar />
        <div className={styles.yearcontainer}>   
            <div className={styles.yearouter}>
              <div className={styles.yeartext} data-aos='fade-up-right'>
                <h2>TEDx VIT 2024</h2>
                <p>
                TEDx VIT 2024 was the 4<sup>th</sup> edition of TedX Talks organized by TEDxVIT, and took place on January 13<sup>th</sup>, 2024 with the theme "Nurture the Future".
                </p>
                <p>
                In a world undergoing rapid transformations, it is imperative to recognize the collective responsibility we share in shaping a sustainable and thriving future as well as the purposeful actions needed to foster it. This theme encapsulates our commitment to showcasing ideas that have a profound impact on the trajectory of tomorrow. It's a call to action, urging us to be stewards of positive change, understanding that every deliberate choice and action contributes to the growth and wellbeing of the world we envision for generations to come.
                </p>
                <a href='TEDxVIT-Booklet-2024_Compressed.pdf' target='_blank'>
                <button className={styles.yearlocation}>
                    Brochure
                </button>
                </a>
              </div>
              <div className={styles.yearimg} data-aos='fade-up-left'>
                <Image
                  src='/nurturewhite.png'
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
                    {tedx2024.map((data, key) => (
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
        </div>
      <MiniFooter/>
    </>
  )
}