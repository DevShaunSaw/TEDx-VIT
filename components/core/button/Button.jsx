import Link from 'next/link'
import { Children } from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <Link href={props.link} rel='noreferrer' target={props.target}>
      <button className={`${styles.button} ${styles.noselect}`}>
        {props.content}
      </button>
    </Link>
  )
}

export default Button
