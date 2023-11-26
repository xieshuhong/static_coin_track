import { createStore, combineReducers } from 'redux';
import userReducer from './reducers';


const rootReducer = combineReducers({userReducer})

const configureStore = () => createStore (rootReducer);

export default configureStore;

