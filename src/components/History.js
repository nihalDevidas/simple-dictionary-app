import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const History = () => {

  const navigate = useNavigate()

  useEffect(()=>{
   
    navigate("hist-list")

  },[])
  

  return (
    <div style={{border:"1px solid",height:"500px",width:"90%"}}>
     
     // this container is used to show history list 
     // and details when word in history list is clicked
     
    </div>
  )
}

export default History