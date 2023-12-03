import React from 'react'
import {useSelector} from "react-redux"

const History = () => {

  const{history} = useSelector(state=>state)   // get required data from store

  return (
    <div>
     <h1>History</h1>
     <div>
      {
        history.map((val)=>{
          return <a className='hist-a'>{val}</a>
        })
      }
     </div>
    </div>
  )
}

export default History