import React from 'react'
import SearchBar from "./SearchBar";
import SearchDisplay from "./SearchDisplay";
import { useSelector } from 'react-redux';


const Home = () => {

 const{data} = useSelector(state=>state)

    return (
      <div>

      <SearchBar/>
      {data.length > 0 && <SearchDisplay/>}    

      </div>
    )
}

export default Home

// line 15 if data is avialable then only display details