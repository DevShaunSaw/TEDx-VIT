import Navbar from '../components/widgets/navbar/Navbar'
import Cards from '../components/speaker/Card'
import styles from '../styles/2024.module.css'
import { tedx2018 } from '../components/constants/constants'
import Image from 'next/image'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'

export default function Edition4 () {

  return (
    <>
      <Navbar />
        <div className={styles.yearcontainer}>
            <div className={styles.yearouter}>
              <div className={styles.yeartext} data-aos='fade-up-right'>
                <h2>TEDx VIT 2018</h2>
                <p>
                TEDx VIT 2018 was the 1<sup>st</sup> edition of TedX Talks organized by tedX VIT, and took place in January 2018 with the theme "Understanding The Box"
               </p>
                <p>
                All the problems faced by people in the different walks of life is analogous with the problem of living in a box. As a child, when shown a box and asked how many faces does it have, we always replied with the one face that was visible to us through our perspective. But we then learnt that a box in fact consists of not one, but six sides, may open and close and that the box itself comes with its own environment. This gave us a wider perspective and a better understanding of the box as a whole.
                </p>
                <a href='TEDxVIT-Booklet-2018.pdf' target='_blank'>
                <button className={styles.yearlocation}>
                    Brochure
                </button>
                </a>
              </div>
              <div className={styles.yearimg} data-aos='fade-up-left'>
                <Image
                  src='./2018.png'
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
                    {tedx2018.map((data, key) => (
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