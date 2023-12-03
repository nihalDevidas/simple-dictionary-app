import React from "react"
import Home from "./components/Home";
import History from "./components/History"
import NavBar from "./components/NavBar"
import {Routes,Route} from "react-router-dom"

function App() { 

  
  return (
    <div className="App">

     <NavBar/> 

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/history" element = {<History/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
