import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={`${styles.nav}`}>
      <Link href='/' rel='noreferrer'>
        <div className={styles.logo}>
          <Image src='/logo.png' height={45} width={182} alt='logo' />
        </div>
      </Link>
      <ul className={styles.navright}>
        <Link href='/'>
          <div className={styles.item}>
            <li className={styles.navitem}>Home</li>
          </div>
        </Link>
        <Link href='/AboutTEDxVIT' >
          <div className={styles.item}>
            <li className={styles.navitem}>About</li>
          </div>
        </Link>
        <Link href='/PreviousEvents' >
          <div className={styles.item}>
            <li className={styles.navitem}>Previous Events</li>
          </div>
        </Link>
        <Link href='/#contacts' rel='noreferrer'>
          <div className={styles.item}>
            <li className={styles.navitem}>Contact Us</li>
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar