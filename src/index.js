import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { requestInventory, sendInquiryForm } from './reducers';

import './index.css';
import Routes from './containers/Routes.jsx';

import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({ requestInventory, sendInquiryForm });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
