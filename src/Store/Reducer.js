import {combineReducers} from 'redux';

import AddScenarioReducer from './AddScenarioDispatcher/AddScenarioReducer.js';
import DisplayScenarioReducer from './DisplayScenarioDispatcher/DisplayScenarioReducer.js';


const Reducer = combineReducers({
  AddScenarioReducer,
  DisplayScenarioReducer
});

export default Reducer;