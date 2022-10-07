import {SEQUENCE1} from './actionTypes';


export const updateSequence = () => {
    try {
        dispatch({
            type: SEQUENCE1,
            payload: data
        })
    } catch(err) {
        console.log(err)
    }
}