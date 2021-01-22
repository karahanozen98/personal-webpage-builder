import React from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home/Home";
import "./App.css"

function App() {
  return (
    <div style={{width:"100%"}} className="App">
      <Navbar/>
      <Home></Home>
    </div>
  );
}

export default App;
