import React,{useEffect,useState} from "react";

function DigitalClock(){

  const [time,setTime] = useState(new Date())

  useEffect(()=>{
    const interval = setInterval(()=>{setTime(new Date())},1000)

    return ()=> clearInterval(interval)
  },[])


  function padZero (num) {
    return num<10 ? `0${num}`: `${num}`;
      }

function formatTime(){
let hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const meridian = hours>12 ? 'PM' : 'AM';

hours = hours % 12 || 12

return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridian}`

  }


  return(
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>

    </div>
  )
  }

export default DigitalClock;