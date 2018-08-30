
import { combineReducers } from 'redux';

let initialState = 0;


const vote = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const handleTopics = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TOPIC':
      return [
        {
          title: action.title,
        },
        ...state,
      ];
    case 'DELETE_TOPIC':
    return state.filter((topic) => topic._id !== action._id);
    default: return state;
  }
};





const reducers = combineReducers({
  vote,
  handleTopics
});

export default reducers;

