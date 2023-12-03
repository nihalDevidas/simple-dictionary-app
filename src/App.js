import React from "react"
import Home from "./components/Home";
import History from "./components/History"
import HistoryList from "./components/HistoryList"
import NavBar from "./components/NavBar"
import SearchDisplay from "./components/SearchDisplay";
import {Routes,Route} from "react-router-dom"

function App() { 

  
  return (
    <div className="App">

     <NavBar/> 

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/history" element = {<History/>}/>
        <Route path = "/history/hist-list" element = {<HistoryList/>}/>
        <Route path = "/history/hist-list/word-detail" element = {<SearchDisplay/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
