import React from 'react'
import styles from './Notes.module.css'
import Card from '../card/Card'

const Notes = (props) => {
  return (
    <div className={styles.notes}>
      <Card select={props.select}/>
      <Card seelct={props.select}/>
    </div>
  )
}

export default Notes
