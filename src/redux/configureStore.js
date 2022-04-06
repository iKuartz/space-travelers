import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/Rockets';
import { missionsReducer } from './missions/Missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
