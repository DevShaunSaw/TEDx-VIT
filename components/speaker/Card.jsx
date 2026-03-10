import Image from 'next/image'
import styles from './Card.module.css'

const Cards = (props) => {
  return (
    <div className={styles.speakouter}>
      {/*<Introducing color={props.color} content="Introduce"/>*/}
      <div className={styles.image}>
        <Image
          src={props.img}
          layout='fill'
          objectFit='cover'
          alt={props.name}
        />
      </div>
      <div className={styles.speakinner}>
        <div className={styles.content}>
          <h1>{props.name}</h1>
          <h3>
            {props.designation.split('\\n').map((line) => (
              <p>{line}</p>
            ))}
          </h3>
        </div>
        <div className={styles.talk_link}><a href={props.talk} target='blank'>{props.type}</a></div>
      </div>
      
    </div>
  )
}

export default Cards
