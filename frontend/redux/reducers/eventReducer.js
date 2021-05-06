import { ActionTypes } from '../constants/action-types';

const initState = [];

export const eventReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SEARCHED_EVENTS:
      return payload;
    default:
      return state;
  };
};
