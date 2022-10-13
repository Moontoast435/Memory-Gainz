import {SEQUENCE1, SEQUENCE_FINISHED} from './actionTypes';


export const updateSequence = (data) => {
    return {
        type: SEQUENCE1,
        payload: data
    }
}

export const finishSequence = () => {
    return {
        type: SEQUENCE_FINISHED

    }
}