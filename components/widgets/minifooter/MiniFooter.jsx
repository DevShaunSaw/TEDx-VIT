import Image from 'next/image'
import styles from "./MiniFooter.module.css"
import Link from 'next/link'

export default function MiniFooter() {
  return (
    <div className='footer' id='contacts'>
      <div className={styles.newfooter} data-aos='fade-right' data-aos-delay='600'>
        <div>
          <div className={styles.content}>
            <Image
                src='./logo2.png'
                width='239'
                height='50'
            />
            <div className={styles.contact}>
                <Link href='/About'>
                <h3>About TED</h3>
                </Link>
            </div>
            <div className={styles.contact}>
                <Link href='/AboutTEDxVIT'>
                <h3>About TEDxVIT</h3>
                </Link>
            </div>
            <div className={styles.social}>
              <a
                href='https://www.instagram.com/tedxvit/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/instagram.svg'
                  height='25'
                  width='25'
                  alt='instagram'
                />
              </a>

              <a
                href='https://twitter.com/tedxvitmumbai'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/twitter.svg'
                  height='25'
                  width='25'
                  alt='twitter'
                />
              </a>

              <a
                href='https://www.linkedin.com/in/tedxvit-talks/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/linkedin.svg'
                  height='25'
                  width='25'
                  alt='linkedin'
                />
              </a>

              <a
                href='https://www.facebook.com/tedxvittalks/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/facebook.svg'
                  height='25'
                  width='25'
                  alt='facebook'
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerMap} data-aos='fade-right' data-aos-delay='600'>
          <p>Locate Us</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.959617211942!2d72.86939551125826!3d19.021501053606066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3935db8de3%3A0x36d4c585969db0ab!2sTEDx%20VIT!5e0!3m2!1sen!2sin!4v1769877789863!5m2!1sen!2sin" width="350" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <p>
      This independent TEDx event is operated under license from TED
      </p>
    </div>
  )
}
