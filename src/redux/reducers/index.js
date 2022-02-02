import { combineReducers } from 'redux';
import characters from './characters';

const rootReducer = combineReducers({
    characters: characters
});

export default rootReducer;
