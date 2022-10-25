import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer/combineReducer';
window.React = React;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
