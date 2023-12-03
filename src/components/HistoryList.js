import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetch_Api_data} from "../redux/actions/postActions"
import { useNavigate} from 'react-router-dom'

const HistoryList = () => {

    const{history} = useSelector(state=>state)   // get required data from store
    const dispatch = useDispatch()
    const navigate = useNavigate()


    function callDisplay(value){

        dispatch(fetch_Api_data(value))
        navigate("word-detail")
    
    }

  return (
    <div className='hist-list-container' >
        <h1>History</h1>
        <div>
        {
        history.map((val)=>{
          return <a className='hist-a' onClick = {()=>callDisplay(val)}>{val}</a>
        })
        }
        </div>
    </div>
  )
}

export default HistoryList

