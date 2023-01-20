import React from 'react'
import styles from './Notes.module.css'
import Card from '../card/Card'

const Notes = () => {
  return (
    <div className={styles.notes}>
      <Card/>
      <Card/>
    </div>
  )
}

export default Notes
