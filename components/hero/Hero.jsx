import Image from 'next/image'
import Button from '../core/button/Button'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className={styles.text} data-aos='zoom-in' data-aos-delay='10'>
        <img src='/logo.png'/>
        <p className='event-date' style={{ color: '#ff0000' }}>28th March, 2026</p>
        <div className={styles.button}>
          <Button
          content="TEDxVIT 2026"
          link="/2026"
          target='_self'
          />
          <Button
          content="Get Tickets"
          link="/seat-selection"
          target='_self'
          />
        </div>
      </div>

      <div className={styles.img} data-aos='zoom-in' data-aos-delay='10'>
        <Image
          src='/coming-soon.png'
          layout='fill'
          objectFit='contain'
          alt='TEDx VIT'
        />
      </div>
    </div>
  )
}

export default Hero
