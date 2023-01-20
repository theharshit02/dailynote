import React, { useState } from 'react'
import styles from './Sidebar.module.css'

const Sidebar = (props) => {
    const [select, setselect] = useState("")

    function handleselect(e){
        setselect(e.target.id)
    }
    props.choose(select)

  return (
    <div className={styles.sidebar}>
        <div className={styles.header}> <img src="notepad.png" alt="NotepadImage"/> DAILY NOT TRACKER</div>
        <div onClick={handleselect} id="1" className={styles.option} style={select==="1"?{background: "#bebdbd", color: "#806BFF"}:{color: "#806BFF"}}> <img src="list.png" alt="ListImage"/> Daily Notes</div>
        <div onClick={handleselect} id="2" className={styles.option} style={select==="2"?{background: "#bebdbd", color: "#FF6B6B"}:{color: "#FF6B6B"}}> <img src="bookmark.png" alt="BookmarkImage"/> Bookmarks</div>
    </div>
  )
}

export default Sidebar
