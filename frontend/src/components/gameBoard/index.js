import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { finishSequence } from '../../actions/sequence';

export default function GameBoard() {
const gameSequence = useSelector((state) => state.Sequencer)
const dispatch = useDispatch();


const initSequence = async () => {
    let startGame = document.getElementsByClassName('start-game');
    startGame[0].style.display = 'none';
    let squares = document.getElementsByClassName('square');
    const timer = ms => new Promise(res => setTimeout(res, ms))
    for (let i = 0; i < gameSequence.sequence1.length ; i++) {
        for (let j = 0; j < squares.length ; j++ ) {
            if (squares.item(j).className === `square ${gameSequence.sequence1[i].row}-${gameSequence.sequence1[i].column}`) {
                squares.item(j).style.backgroundColor = "purple";  
                setTimeout(() => {
                    squares.item(j).style.backgroundColor = "white"; 
            }, 1000);

            }
        }
    await timer(2000);
    }
    dispatch(finishSequence());
 }


  return (
    <>
    <div className="sequence-board">
        <div data-testid="row1" className="row 1">
            <div className="square 1-1" id="square1-1"></div>
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
    <button className="start-game" onClick={initSequence}>Start Game</button>
    </>
  )
}
