import React, { useEffect, useState } from 'react'
import styles from './Notes.module.css'
import Card from '../card/Card'
import SendIcon from '@mui/icons-material/Send';


function localStorageNotes(){
  let notes = localStorage.getItem("notes")

  if (notes){
    return JSON.parse(notes)
  }
  else{
    return []
  }
}

const Notes = (props) => {

  const [notes, setnotes] = useState(localStorageNotes())

  function handlesubmit(e){
    e.preventDefault()
    setnotes((prev)=>([...prev,e.target.input.value]))
    e.target.input.value=""
  }

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  return (
    <div className={styles.notes}>

      {
        notes.map((i)=>
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

export default Notes
