import Navbar from '../components/widgets/navbar/Navbar'
import styles from '../styles/2024.module.css'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'

export default function About () {

  return (
    <>
      <Navbar />
        <div className={styles.yearcontainer}>   
            <div className={styles.yearouter}>
              <div className={styles.abouttext} data-aos='fade-up-right'>
                <h2>About TEDxVIT</h2>
                <h3>x = independently organized event</h3>
                <p>
                Our event is called TEDxVIT, where x = independently organized TED event. At TEDxVIT, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. TEDxVIT is formed by a group of students & professors from Vidyalankar Institute of Technology, Mumbai to bring together bright minds to give talks that are idea-focused, and on a wide range of subjects, to foster learning, inspiration and wonder – and provoke conversations that matter.
                </p>
                <p>
                Each 18 minute (or less) long talk, performance or demonstration will have the power to open the minds of the audience, spark dialogue, and challenge attendees to transform ideas into action. We hope that TEDxVIT will change the view of open-minded and curious individuals, and will inspire, connect, and shape a new world.
                </p>
                <p>
                One idea at a time.
                </p>
              </div>
            </div>
        </div>
      <MiniFooter/>
    </>
  )
}