import React, { useState } from 'react'
import styles from './Main.module.css'
import Sidebar from '../sidebar/Sidebar'
import Notes from '../notes/Notes'
import Bookmarks from '../bookmarks/Bookmarks'

const Main = () => {
  const [select, setselect] = useState("")

  function handlechoose(e){
    setselect(e)
  }

  return (
    <div className={styles.main}>
      <Sidebar choose={handlechoose}/>
      {select==="1"?<Notes/>:select==="2"?<Bookmarks/>:""}
    </div>
  )
}

export default Main
