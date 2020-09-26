import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './reducers/store';

import './styles/index.css';
import * as serviceWorker from './serviceWorker';

// import Api from './services/omdbapi';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const api = new Api();

// api.getImdb('tt2975590').then((res) => console.log(res))
