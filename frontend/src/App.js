import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage, Game, HowToPlay } from './Pages';


function App() {
  return (
  <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/game" element={<Game/>}/>
    <Route exact path="/howtoplay" element={<HowToPlay />}/>
  </Routes> 
  );
}

export default App;
