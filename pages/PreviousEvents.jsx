import Speakers from '../components/previous/Previous'
import Navbar from '../components/widgets/navbar/Navbar'
import styles from '../styles/Home.module.css'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'

export default function PreviousEvents () {

  return (
    <>
    <Navbar />
      <div className={styles.container}>
        <Speakers/>
      </div>
    <MiniFooter/>
    </>
  )
}