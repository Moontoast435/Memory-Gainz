import { GAME_WON, GAME_LOST, SEQUENCE1, SEQUENCE_FINISHED } from "../actions/actionTypes";

const initialState = {
    sequence1: [],
    isSequenceFinished: false,
    playerWin: false,
    playerLose: false
  };

const Sequencer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SEQUENCE1:
            return {
                ...state,
                sequence1: payload
            }
        case SEQUENCE_FINISHED:
            return {
              ...state,
              isSequenceFinished: true
            } 
        case GAME_WON:
            return {
              ...state,
              playerWin: true
            }
        case GAME_LOST:
            return {
              ...state,
              playerLose: true
            }
          
        default:
            return state
    
    }

  };

export default Sequencer