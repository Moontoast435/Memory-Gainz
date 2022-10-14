import React , { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { winGame, loseGame } from '../../actions/sequence';

export default function Interactive() {
const gameSequence = useSelector((state) => state.Sequencer);
const [numberOfClicks, setClicks]  = useState(0);
const [correct, setCorrect] = useState(0);

const dispatch = useDispatch();

const handleClick = (e) => {
    // console.log((e.target.className.substr(7,1)) + ' ' + (e.target.className.substr(9,1)));
    let row = parseInt(e.target.className.substr(7,1));
    let column = parseInt(e.target.className.substr(9,1));
    if (row === gameSequence.sequence1[numberOfClicks].row && column === gameSequence.sequence1[numberOfClicks].column) {
        console.log('It matches');
        setClicks((prevState) => 
            prevState + 1);
        setCorrect((prevState) =>
            prevState + 1);
    } else {
       
        setClicks((prevState) => 
            prevState + 1);
    }
}

useEffect(() => {
    console.log('clicked');
    if (numberOfClicks === 5 && correct === 5) {
        dispatch(winGame());
        setClicks(0)
    } else if
    (numberOfClicks === 5 && correct < 5) {
        dispatch(loseGame())
    }
}, [numberOfClicks]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="sequence-board">
    <div data-testid="row1" className="row 1">
        <button onClick={(e) => handleClick(e)} className="square 1-1" id="square1-1"></button>
        <button onClick={handleClick} className="square 1-2"></button>
        <button onClick={handleClick} className="square 1-3"></button>
        <button onClick={handleClick} className="square 1-4"></button>
        <button onClick={handleClick} className="square 1-5"></button>
    </div>
    <div data-testid="row2" className="row 2">
        <button onClick={handleClick} className="square 2-1"></button>
        <button onClick={handleClick} className="square 2-2"></button>
        <button onClick={handleClick} className="square 2-3"></button>
        <button onClick={handleClick} className="square 2-4"></button>
        <button onClick={handleClick} className="square 2-5"></button>
    </div>
    <div data-testid="row3" className="row 3">
        <button onClick={handleClick} className="square 3-1"></button>
        <button onClick={handleClick} className="square 3-2"></button>
        <button onClick={handleClick} className="square 3-3"></button>
        <button onClick={handleClick} className="square 3-4"></button>
        <button onClick={handleClick} className="square 3-5"></button>
    </div>
    <div data-testid="row4" className="row 4">
        <button onClick={handleClick} className="square 4-1"></button>
        <button onClick={handleClick} className="square 4-2"></button>
        <button onClick={handleClick} className="square 4-3"></button>
        <button onClick={handleClick} className="square 4-4"></button>
        <button onClick={handleClick} className="square 4-5"></button>
    </div>
    <div data-testid="row5" className="row 5">
        <button onClick={handleClick} className="square 5-1"></button>
        <button onClick={handleClick} className="square 5-2"></button>
        <button onClick={handleClick} className="square 5-3"></button>
        <button onClick={handleClick} className="square 5-4"></button>
        <button onClick={handleClick} className="square 5-5"></button>
    </div>
    <p> im the interactive board</p>
</div>
  )
}
