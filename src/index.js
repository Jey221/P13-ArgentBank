import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { getLogin } from './redux/actions/loginAction.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(getLogin());

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
