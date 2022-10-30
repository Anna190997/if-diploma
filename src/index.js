import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import reducer from './redux/reducer/combineReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
window.React = React;

const store = createStore(reducer, composeWithDevTools());

const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
