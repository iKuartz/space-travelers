import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/Rockets';

const missionsReducer = '';

const rootReducer = combineReducers({ rockets: rocketsReducer, missions: missionsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
