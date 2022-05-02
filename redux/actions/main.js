import * as type from '../types';

export const setNumber = (number) => {
  return {
    type: 'type.SET_NUMBER',
    payload: number
  };
};
