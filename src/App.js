import React from "react";
import "./App.css";
import ItemlistContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemlistContainer/>
    </div>
    
  );
}

export default App;

