import React from 'react'
import styles from './Main.module.css'
import Sidebar from '../sidebar/Sidebar'

const Main = () => {
  return (
    <div className={styles.main}>
      <Sidebar/>
    </div>
  )
}

export default Main
