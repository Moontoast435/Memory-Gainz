import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame, updateSequence } from '../../actions/sequence';

export default function Result() {
  const dispatch = useDispatch();
  const gameSequence = useSelector((state) => state.Sequencer);
  const [sequence, setSequence] = useState([]);

  const playAgain = () => {
    dispatch(resetGame());

    createSequenceArray();
   
    dispatch(updateSequence(sequence));
    
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
    setSequence( sequenceArray );
    
  }

  return (
    <div>
      <div>
        {gameSequence.playerWin &&
        <div>
        <p> Congrats! You win!</p>
        <button onClick={playAgain}>Play Again?</button>
        </div>
        }
        </div>
        <div>
        {gameSequence.playerLose &&
        <div>
        <p> Bad luck! You lost. </p>
        <button onClick={playAgain}>Play Again?</button>
        </div>
        }
        </div>
        
    </div>
  )
}
