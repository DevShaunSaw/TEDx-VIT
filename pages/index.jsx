import Speakers from '../components/previous/Previous'
import Navbar from '../components/widgets/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero/Hero'
import About from '../components/about/AboutHero'
import Contact from '../components/contact/Contact'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'

export default function Home () {

  return (
    <>
    <Navbar />
      <div className={styles.container}>
        <Hero id='#hero' />
        <About id='#about' />
        <Speakers id="#past" />
        <Contact id='#contacts' />
      </div>
    <MiniFooter/>
    </>
  )
}
