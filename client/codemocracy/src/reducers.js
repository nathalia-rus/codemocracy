
import { combineReducers } from 'redux';

let initialState = [];

const topics = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOPICS': return state;
    default: return state;
  }

};

const reducers = combineReducers({
  topics
});

export default reducers;