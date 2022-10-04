import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage, Game } from './Pages';


function App() {
  return (
  <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/game" element={<Game/>}/>
  </Routes> 
  );
}

export default App;
