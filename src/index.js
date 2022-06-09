import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import mainReducer from './store/reducers/mainReducer';

// combine reducers on one rootReducer
const rootReducer = combineReducers({
  main: mainReducer,
});

// if browser has redux dev tools extension (for track redux actions) then aplly it as middleware and create store
let store;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)),
  );
else store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
