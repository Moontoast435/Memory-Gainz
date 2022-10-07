import { SEQUENCE1 } from "../actions/actionTypes";

const initialState = {
    sequence1: null
  };

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SEQUENCE1:
            return {
                ...state,
                sequence1: payload
            }  
        default:
            return state
    
    }

  };