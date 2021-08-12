import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import axios from 'axios';

<<<<<<< HEAD

// axios.defaults.baseURL = 'http://localhost:3001';
=======
axios.defaults.baseURL = 'http://87.249.49.53:3001';
>>>>>>> test

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
