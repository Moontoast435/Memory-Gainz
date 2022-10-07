import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
let navigate = useNavigate();

    return (
        <div data-testid="parent-div">
            <h1 className="title">Memory Gainz</h1>
            <div className="menu-wrapper">
                <div className="menu" data-testid="menu-div">
                <button aria-label="play-game-button" className="menu-buttons" onClick={() => navigate('./game')}>Play Game</button>
                <button aria-label="how-to-play-button" className="menu-buttons">How to play</button>
                <button aria-label="options-button" className="menu-buttons">Options</button>
                <button aria-label="leaderboard-button" className="menu-buttons">Leaderboard</button>
                </div>
            </div>
            <footer>Background image sourced from unsplash</footer>
        </div>
    );
}

export default HomePage;
