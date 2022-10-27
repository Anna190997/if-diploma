import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import reducer from './redux/reducer/combineReducer';
import createSagaMiddleware from 'redux-saga';
import { watchFetchProduct } from './redux/saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
window.React = React;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchFetchProduct);
const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
