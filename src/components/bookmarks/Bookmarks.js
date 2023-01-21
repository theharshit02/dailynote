import React from 'react'
import styles from './Bookmarks.module.css'
import Card from '../card/Card'

const Bookmarks = (props) => {
  return (
    <div className={styles.bookmark}>
      <Card select={props.select}/>
      <Card select={props.select}/>
    </div>
  )
}

export default Bookmarks
