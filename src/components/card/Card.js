import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  const [select, setselect] = useState()

  useEffect(() => {
    setselect(props.select)
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {select==="1"?
        <div className={styles.card}>
          <p className={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className={styles.time}>21-01-22 01:28AM</p>
        </div>
      :
        select==="2"?
          <div className={styles.card}>
            <p className={styles.content}><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">google.com</a></p>
            <p className={styles.time}>21-01-22 01:28AM</p>
          </div>
        :
          ""
      }
    </div>
    
  )
}

export default Card
