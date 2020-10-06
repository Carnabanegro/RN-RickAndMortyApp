import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import charsReducer from './charDuck.js';
import locReducer from './locDuck';
import epiReducer from './epiDuck';
import searchReducer from './searchDuck' ;

let rootReducer = combineReducers({
	episodes: epiReducer,
    characters: charsReducer,
	locations: locReducer,
	search: searchReducer
})
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
	let store= createStore(
		rootReducer, 
		composeEnhancers(applyMiddleware(thunk))
	)
	return store
}