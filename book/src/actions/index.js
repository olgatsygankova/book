import { START, STOP } from '../constants/index';

export const start = (dispatch) => dispatch({
    type: START
});

export const stop = (dispatch) => dispatch({
    type: STOP
});

