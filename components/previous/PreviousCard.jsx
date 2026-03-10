import Image from 'next/image'
import styles from './PreviousCard.module.css'

const PreviousCards = (props) => {
  return (
    <div className={styles.outer}>
      {/*<Introducing color={props.color} content="Introduce"/>*/}
      <div className={styles.image}>
        <Image
          src={props.img}
          layout='fill'
          objectFit='cover'
          alt={props.name}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>{props.name}</h1>
          <h3>
            {props.designation.split('\\n').map((line) => (
              <p>{line}</p>
            ))}
          </h3>
        </div>
        <div />
      </div>
    </div>
  )
}

export default PreviousCards
