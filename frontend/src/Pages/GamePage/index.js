import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gamepage.css';

const Game = () => {

let navigate = useNavigate();

    return (
        <div className="game-container">
            Game page
        <button onClick={() => navigate(-1)}>Go back</button>
        </div>
        
        

    );
}

export default Game;
