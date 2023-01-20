import React from 'react'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <p className={styles.time}>21-01-22 01:28AM</p>
    </div>
  )
}

export default Card
