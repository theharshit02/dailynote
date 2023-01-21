import React, { useEffect } from 'react'
import styles from './Bookmarks.module.css'
import Card from '../card/Card'
import { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';

function localStorageBookmark(){
  let bookmark = localStorage.getItem("bookmark")

  if (bookmark){
    return JSON.parse(bookmark)
  }
  else{
    return []
  }
}

const Bookmarks = (props) => {

  const [bookmark, setbookmark] = useState(localStorageBookmark)

  function handlesubmit(e){
    e.preventDefault()
    setbookmark((prev)=>([...prev,e.target.input.value]))
    e.target.input.value=""
  }

  useEffect(()=>{
    localStorage.setItem("bookmark", JSON.stringify(bookmark))
  },[bookmark])

  return (
    <div className={styles.bookmark}>
      {
        bookmark.map((i)=>
        (<Card select={props.select} content={i} />)
      )
      }

      <div className={styles.enter}>
        <form onSubmit={handlesubmit} action="">
          <input id='input' className={styles.field} placeholder="Type a Daily Note..." type="text"/>
          <button className={styles.btn}><SendIcon color='success'/></button>
        </form>
      </div>
    </div>
  )
}

export default Bookmarks
