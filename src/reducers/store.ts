// Redux
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedStore: object) =>
  createStore(rootReducer, preloadedStore, composeEnhancers(applyMiddleware(thunk)));

const store = configureStore({});

export default store;
