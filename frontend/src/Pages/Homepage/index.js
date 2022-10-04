import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
let navigate = useNavigate();

    return (
        <div>
            home lol
        <button onClick={() => navigate('./game')}>Play Game</button>
        </div>
    );
}

export default HomePage;
