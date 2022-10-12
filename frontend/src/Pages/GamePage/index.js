import React, {useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './gamepage.css';
// import Sequence from '../../components/gameSequence/index';
import { updateSequence } from '../../actions/sequence';
import { useDispatch, useSelector } from 'react-redux';

const Game = () => {
const [sequence, setSequence] = useState([]);
const gameSequence = useSelector((state) => state.Sequencer)
const square11 = useRef(null);

const dispatch = useDispatch();
const navigate = useNavigate();


const createSequenceArray = () => {
    const numberOfFlashes = 5;
    let sequenceArray = [];

    for (let i = 0; i < numberOfFlashes; i++) {
        let coordinates = {
            row : 0,
            column: 0
        };
        coordinates.row = Math.floor(Math.random() * 5 + 1);
        coordinates.column = Math.floor(Math.random() * 5 + 1);
        sequenceArray.push(coordinates);
    }
    setSequence( sequenceArray );
  
  }

useEffect(() => {
    createSequenceArray();
    
  }, [])
  
  
useEffect(() => {
    dispatch(updateSequence(sequence))
}, [sequence])


const handleClick = async () => {
    // let testCoordinates = {row: 2, column : 1};
    let squares = document.getElementsByClassName('square');
    const timer = ms => new Promise(res => setTimeout(res, ms))
    for (let i = 0; i < gameSequence.sequence1.length ; i++) {
        for (let j = 0; j < squares.length ; j++ ) {
            if (squares.item(j).className === `square ${gameSequence.sequence1[i].row}-${gameSequence.sequence1[i].column}`) {
                squares.item(j).style.backgroundColor = "green";  
                setTimeout(() => {
                    squares.item(j).style.backgroundColor = "red" 
            }, 1000);

            }
        }
    await timer(2000);
    }
    
    // console.log(gameSequence.sequence1[0].row);
    // changingDiv.style.backgroundColor = 'green';

}
    return (
        <div className="game-container">
            <div>
                    Game page
                <button onClick={() => navigate(-1)}>Go back</button>
                <button onClick={handleClick}>Play!</button>
            </div>
        <div className="sequence-board">
            <div data-testid="row1" className="row 1">
                <div ref={square11} className="square 1-1" id="square1-1"></div>
                <div className="square 1-2"></div>
                <div className="square 1-3"></div>
                <div className="square 1-4"></div>
                <div className="square 1-5"></div>
            </div>
            <div data-testid="row2" className="row 2">
                <div className="square 2-1"></div>
                <div className="square 2-2"></div>
                <div className="square 2-3"></div>
                <div className="square 2-4"></div>
                <div className="square 2-5"></div>
            </div>
            <div data-testid="row3" className="row 3">
                <div className="square 3-1"></div>
                <div className="square 3-2"></div>
                <div className="square 3-3"></div>
                <div className="square 3-4"></div>
                <div className="square 3-5"></div>
            </div>
            <div data-testid="row4" className="row 4">
                <div className="square 4-1"></div>
                <div className="square 4-2"></div>
                <div className="square 4-3"></div>
                <div className="square 4-4"></div>
                <div className="square 4-5"></div>
            </div>
            <div data-testid="row5" className="row 5">
                <div className="square 5-1"></div>
                <div className="square 5-2"></div>
                <div className="square 5-3"></div>
                <div className="square 5-4"></div>
                <div className="square 5-5"></div>
            </div>
        </div>
        {/* <Sequence /> */}
        </div>
        
        

    );
}

export default Game;
