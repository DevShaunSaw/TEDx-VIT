import Image from 'next/image'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className='footer' id='contacts'>
      <div className={styles.footer} data-aos='fade-right' data-aos-delay='600'>
        <div>
        <h1>Contact Us</h1>
        <div className={styles.contactContainer}>
          <div className="container-left">
          <div className={styles.content}>
            <h2>For Any Queries: </h2>
            <div className={styles.contact}>
              <a
                className={styles.contactLink}
                href='mailto:contact@tedxvit.in'
              >
                <Image src='/mail.svg' height='20' width='20' alt='mail' />
                <span>contact@tedxvit.in</span>
              </a>
            </div>
          </div>
          <div className={styles.content}>
            <h2>For Partnerships / Sponsorships: </h2>
            <div className={styles.contact}>
              <a
                className={styles.contactLink}
                href='mailto:partnerships@tedxvit.in'
              >
                <Image src='/mail.svg' height='20' width='20' alt='mail' />
                <span>partnerships@tedxvit.in</span>
              </a>
            </div>
          </div>
          </div>
          <div className="container-right">
          <div className={styles.content}>
            <h2>Parth Gadge</h2>
            <div className={styles.contact}>
              <a
                className={styles.contactLink}
                href='tel:+917588094270'
              >
                <Image src='/phone.svg' height='20' width='20' alt='phone' />
                <span>+91 75880 94270</span>
              </a>
            </div>
          </div>
          <div className={styles.content}>
            <h2>Varun Pai</h2>
            <div className={styles.contact}>
              <a
                className={styles.contactLink}
                href='tel:+919325793278'
              >
                <Image src='/phone.svg' height='20' width='20' alt='phone' />
                <span>+91 93257 93278</span>
              </a>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact