import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './gamepage.css';
import GameBoard from '../../components/gameBoard';
import Interactive from '../../components/interactiveBoard';
import Result from '../../components/resultCard';
import { updateSequence } from '../../actions/sequence';
import { useDispatch, useSelector } from 'react-redux';

const Game = () => {
const [sequence, setSequence] = useState([]);
const sequencerRedux = useSelector((state) => state.Sequencer)
const dispatch = useDispatch();
const navigate = useNavigate();


useEffect(() => {
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
    createSequenceArray();

  }, [])
  
  
useEffect(() => {
    dispatch(updateSequence(sequence))
}, [sequence]) // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div>
            <button className="go-back-button" onClick={() => navigate(-1)}>Go back</button>
            <div className="game-page-header">
                
                <h1 className="game-page-title">
                        Game page
                </h1>
            </div>
        <div className="game-page">
        <div className="game-container">
            {sequencerRedux.isSequenceFinished
            ? <Interactive /> 
            : <GameBoard />
            }
            
            <Result  />
            
        </div>
        </div>
        </div>

    );
}

export default Game;
