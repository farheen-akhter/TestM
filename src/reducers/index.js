import {combineReducers} from 'redux';
import weatherReducer from './weather'

const reducer =combineReducers({
weather: weatherReducer})
export default reducer;