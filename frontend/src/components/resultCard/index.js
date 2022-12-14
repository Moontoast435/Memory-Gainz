import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame, updateSequence } from '../../actions/sequence';
import './resultCard.css';

export default function Result() {
  const dispatch = useDispatch();
  const gameSequence = useSelector((state) => state.Sequencer);

  const playAgain = () => {
    dispatch(resetGame());

    createSequenceArray();
   
  
    
  }
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
    dispatch(updateSequence(sequenceArray));
    
  }

  return (
    <div>
      <div>
        {gameSequence.playerWin &&
        <div>
        <p className="you-win"> Congrats! You win!</p>
        <button onClick={playAgain}>Play Again?</button>
        </div>
        }
        </div>
        <div>
        {gameSequence.playerLose &&
        <div>
        <p className="you-lose"> Bad luck! You lost. </p>
        <button onClick={playAgain}>Play Again?</button>
        </div>
        }
        </div>
        
    </div>
  )
}
