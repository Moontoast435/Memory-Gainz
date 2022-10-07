import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gamepage.css';

const Game = () => {

let navigate = useNavigate();

    return (
        <div className="game-container">
            <div>
                    Game page
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        <div className="sequence-board">
            <div data-testId="row1" className="row 1">
                <div className="square 1-1"></div>
                <div className="square 1-2"></div>
                <div className="square 1-3"></div>
                <div className="square 1-4"></div>
                <div className="square 1-5"></div>
            </div>
            <div data-testId="row2" className="row 2">
                <div className="square 2-1"></div>
                <div className="square 2-2"></div>
                <div className="square 2-3"></div>
                <div className="square 2-4"></div>
                <div className="square 2-5"></div>
            </div>
            <div data-testId="row3" className="row 3">
                <div className="square 3-1"></div>
                <div className="square 3-2"></div>
                <div className="square 3-3"></div>
                <div className="square 3-4"></div>
                <div className="square 3-5"></div>
            </div>
            <div data-testId="row4" className="row 4">
                <div className="square 4-1"></div>
                <div className="square 4-2"></div>
                <div className="square 4-3"></div>
                <div className="square 4-4"></div>
                <div className="square 4-5"></div>
            </div>
            <div data-testId="row5" className="row 5">
                <div className="square 5-1"></div>
                <div className="square 5-2"></div>
                <div className="square 5-3"></div>
                <div className="square 5-4"></div>
                <div className="square 5-5"></div>
            </div>
        </div>
        </div>
        
        

    );
}

export default Game;
