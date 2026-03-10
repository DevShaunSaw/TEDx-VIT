import Cards from './PreviousCard'
import styles from './Previous.module.css'
import Link from 'next/link'

const Speakers = () => {
  return (
    <div className={styles.speaker}>
      <div className={styles.speaktitle}>
        <h2>Previous Events</h2>
      </div>      
      <div className={styles.speakers}>
        <div className={styles.cards}>
        <Link href='/2025'>
          <div data-aos='flip-up' data-aos-delay='450'>
            <Cards
              name='TEDx VIT 2025'
              img='/new_alchemy_dark_bg.png'
              designation='Alchemy of Change \n March 2025'
            />
          </div>
        </Link>
        <Link href='/2024'>
          <div data-aos='flip-up' data-aos-delay='450'>
            <Cards
              name='TEDx VIT 2024'
              img='/nurtureblack.png'
              color='#4285F4'
              designation='Nurture The Future \n January 2024'
            />
          </div>
        </Link>
          <Link href='/2021'>
          <div data-aos='flip-up' data-aos-delay='300'>
            <Cards
              name='TEDx VIT 2021'
              img='/x2.jpg'
              color='#FBBC04'
              designation='Epiphany \n May 2021'
            />
          </div>
          </Link>
          <Link href='/2019'>
          <div data-aos='flip-up' data-aos-delay='450'>
            <Cards
              name='TEDx VIT 2019'
              img='/2019.png'
              color='#4285F4'
              designation='Ideas Worth Spreading \n March 2019'
            />
          </div>
          </Link>
          <Link href='/2018'>
          <div data-aos='flip-up' data-aos-delay='600'>
            <Cards
              name='TEDx VIT 2018'
              img='/2018.png'
              color='#EA4335'
              designation='Understanding The Box \n Jan 2018'
            />
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Speakers
