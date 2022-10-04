import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
let navigate = useNavigate();

    return (
        <div>
            <h1 className="title">Shooting Range</h1>
            <div className="menu-wrapper">
                <div className="menu">
                <button className="menu-buttons" onClick={() => navigate('./game')}>Play Game</button>
                <button className="menu-buttons">How to play</button>
                <button className="menu-buttons">Options</button>
                <button className="menu-buttons">Leaderboard</button>
            </div>
            </div>
        </div>
    );
}

export default HomePage;
