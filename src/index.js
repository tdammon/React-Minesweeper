import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';

const reducer = (state={board : []}, action) => {
    switch (action.type) {
      case 'MAKE_BOARD':
        return { board : action.payload }
      default:
        return state  
    }
}

const size = (state = {size : ''}, action) => {
    switch (action.type) {
        case 'SET_SIZE' :
          return { size : action.payload}
        default:
          return state  
    }
}

const storeInstance = createStore(
    combineReducers({
        reducer,
        size
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
