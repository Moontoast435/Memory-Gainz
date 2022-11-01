import {SEQUENCE1, SEQUENCE_FINISHED, GAME_WON, GAME_LOST, RESET} from './actionTypes';


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

export const winGame = () => {
    return {
        type: GAME_WON
    }
}

export const loseGame = () => {
    return {
        type: GAME_LOST
    }
}

export const resetGame = () => {
    return {
        type: RESET
    }
}