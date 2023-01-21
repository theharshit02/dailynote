import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './Card.module.css'

function localStorageTime(){
  let time = localStorage.getItem("time")
  
  if(time){
    return JSON.parse(time)
  }
  else{
    return []
  }
}

function localStorageTDate(){
  let date = localStorage.getItem("date")
  
  if(date){
    return JSON.parse(date)
  }
  else{
    return []
  }
}

const Card = (props) => {
  const [select, setselect] = useState()
  const [time, settime] = useState(localStorageTime())
  const [date, setdate] = useState(localStorageTDate())

  useEffect(() => {
    setselect(props.select)
    var date = new Date()
    settime(date.toLocaleTimeString())
    setdate(date.toLocaleDateString())
    // eslint-disable-next-line
  }, []);

  useEffect(()=>{
    localStorage.setItem("time", JSON.stringify(time))
  },[time])

  useEffect(()=>{
    localStorage.setItem("date", JSON.stringify(date))
  },[date])

  return (
    <div>
      {select==="1"?
        <div className={styles.card}>
          <p className={styles.content}>{props.content}</p>
          <p className={styles.time}>{date} {time}</p>
        </div>
      :
        select==="2"?
          <div className={styles.card}>
            <p className={styles.content}><a href={`https://${props.content}`} target="_blank" rel="noopener noreferrer">{props.content}</a></p>
            <p className={styles.time}>{date} {time}</p>
          </div>
        :
          ""
      }
    </div>
    
  )
}

export default Card
