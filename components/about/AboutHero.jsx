import styles from "./AboutHero.module.css"
import Link from "next/link"
import Image from 'next/image'

const AboutHero = () => {
  return (
    <div className='about' id='about'>
      <div className={styles.outer}>
        <div className={styles.text} data-aos='fade-up-right'>
          <h2>What is TEDx?</h2>
          <p>
          In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
          </p>
          <p>
          Our event is called TEDxVIT, where x = independently organized TED event. At our TEDxVIT event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
          </p>
          <div className={styles.tedLinks}>
            <div className={styles.tedLinksTopRow}>
              <a href='https://ted.com/tedx' target='_blank'>
                <button className={styles.location}>
                    <p>Explore&nbsp;TEDx</p>
                </button>
              </a>
              <Link href='/About'>
                <button className={styles.location}>
                    <p>About&nbsp;TED</p>
                </button>
              </Link>
            </div>
            <div className={styles.tedLinksBottomRow}>
              <Link href='/AboutTEDxVIT'>
                <button className={styles.location}>
                    <p>About&nbsp;TEDx&nbsp;VIT</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.img} data-aos='fade-up-left'>
          <Image
            src='/TEDX.png'
            layout='fill'
            objectFit='contain'
            alt='imgRight'
          />
        </div>
      </div>
      {/* <a href='2024'>
      <div className={styles.gdsc} id="upcoming" data-aos='flip-up' data-aos-duration='400'>
        <h2>TEDx VIT 2024</h2>
        <p>
          TEDx VIT 2024 is the 4<sup>th</sup> Edition of TEDx talks hosted by TEDx VIT. It will be held on 13th January, 2024 from 2:00 PM to 7:00 PM at Vidyalankar Institute of Technology, Mumbai.
        </p>
        <br></br>
        <p>
        The theme for this edition is "Nurture The Future", which perfectly encapsulates our commitment to showcasing ideas that have a profound impact on the trajectory of tomorrow.
        </p>
      </div>
      </a> */}
    </div>
  )
}

export default AboutHero
