import Navbar from '../components/widgets/navbar/Navbar'
import styles from '../styles/2024.module.css'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'
import Contact from '../components/contact/Contact'

export default function About () {

  return (
    <>
      <Navbar />
        <div className={styles.yearcontainer}>   
            <div className={styles.yearouter}>
              <div className={styles.abouttext} data-aos='fade-up-right'>
                <h2>About TEDx</h2>
                <h3>x = independently organized event</h3>
                <p>
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
                </p>

                <h2>About TED</h2>
                <p>
                TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
                </p>
                <p>
                TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the hundreds of TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, <a href='https://ed.ted.com/' target='_blank'>animated educational lessons (TED-Ed)</a> and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, more than 3,000 independently run <a href='https://www.ted.com/about/programs-initiatives/tedx-program' target='_blank'>TEDx events</a> bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future. View a full list of <a href='https://www.ted.com/about/programs-initiatives' target='_blank'>TED’s many programs and initiatives</a>.
                </p>
                <p>
                TED is owned by a nonprofit, nonpartisan foundation. Our aim is to help create a future worth pursuing for all.
                </p>
                <p>
                Follow TED on <a href='http://twitter.com/TEDTalks' target='_blank'>Twitter</a>, <a href='http://www.facebook.com/TED' target='_blank'>Facebook</a>, <a href='https://instagram.com/ted' target='_blank'>Instagram</a>, <a href='https://www.tiktok.com/@tedtoks?lang=en' target='_blank'>TikTok</a> and on <a href='https://www.linkedin.com/company/ted-conferences' target='_blank'>LinkedIn</a>.
                </p>
              </div>
            </div>
        </div>
      <MiniFooter/>
    </>
  )
}