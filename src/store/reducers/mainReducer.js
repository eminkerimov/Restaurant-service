import { SET_VALUE } from '../actions/actionTypes';

const initialState = {
  value: '',
  foods: [],
  
};

const setBlock = (state, action) => {
  return {
    ...state,
    part1: action.part1.description,
  };
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, value: action.payload };
    // case SET_BLOCK:
    //   return setBlock(state, action);
    default:
      return state;
  }
}

export default mainReducer;
