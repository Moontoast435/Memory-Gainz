import React, { useState, useEffect } from "react";
import './firegun.css';

const FireGun = () => {

const [isFired, setFired] = useState(false);

useEffect(() => {
    setTimeout(() => {
        setFired(false)
    }, 1500)
}, [isFired]);

const handleMovement = (e) => {
    let key = e.keyCode;
    console.log(key);
}
    return (
        <div>
            <p>Click the trigger to fire the gun!</p>
            <input type="text" onKeyPress={(e) => handleMovement(e)}/>
            <button id="shoot-button" onClick={() => setFired(true)}>Click to shoot</button>
            <div className="gun-container">
                <img id="gun" alt="gun" src="https://www.pngmart.com/files/3/Handgun-Transparent-Background.png"></img>
                {isFired ? (
                    <p>
                        <img id="boom" alt="Gun firing" src="https://img.freepik.com/free-vector/boom-flash-white_1308-2912.jpg?w=2000"></img>
                    </p>
                ) : (
                    <p>

                    </p>
                )}
            </div>
        </div>
    );
}

export default FireGun;
