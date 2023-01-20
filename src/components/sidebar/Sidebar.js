import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.header}> <img src="notepad.png" alt="NotepadImage"/> DAILY NOT TRACKER</div>
        <div className={styles.option} style={{color: "#806BFF"}}> <img src="list.png" alt="ListImage"/> Daily Notes</div>
        <div className={styles.option} style={{color: "#FF6B6B"}}> <img src="bookmark.png" alt="BookmarkImage"/> Bookmarks</div>
      
    </div>
  )
}

export default Sidebar
