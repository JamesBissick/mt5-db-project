import * as types from '../types';
import { SET_CURRENT_NUMBER_OF_ITEMS } from '../types';

const main = (state = {
  numberOfItems: 10,
}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_NUMBER_OF_ITEMS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default main;
