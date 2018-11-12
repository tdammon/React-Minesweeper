import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';

const reducer = (state={board : []}, action) => {
    if(action.type === 'MAKE_BOARD'){
        console.log(action.payload)
        state = ({ board : action.payload })
        
    }
    console.log(state)
    return state;
}

const storeInstance = createStore(
    combineReducers({
        reducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
