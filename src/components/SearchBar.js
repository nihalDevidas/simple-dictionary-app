import React,{useState} from 'react'
import {fetch_Api_data} from "../redux/actions/postActions"
import { useDispatch } from 'react-redux'



const SearchBar = () => {


    const[userText, setUsertext] = useState("") 
    const dispatch = useDispatch()


    function storeUserData(e)
    {
        let userEnteredText = e.target.value
        setUsertext(userEnteredText)
    }


    function callApi_to_fetchMeaningOfWord()
    {
        dispatch(fetch_Api_data(userText))
    }

  return (
    <div className='search-con'>
        <div>
            <input onChange = {(e)=>storeUserData(e)} type="text"/>
            <button onClick = {callApi_to_fetchMeaningOfWord}>Search</button>
        </div>
    </div>
  )
}

export default SearchBar