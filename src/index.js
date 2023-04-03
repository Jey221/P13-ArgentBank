import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getLogin } from './redux/actions/loginActions.js';

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
