import { createStore, applyMiddleware, compose } from "redux";
import createHistory from 'history/createBrowserHistory';
import { reducers } from "./reducers/index";
import { routerMiddleware, push } from "react-router-redux";
import thunk from 'redux-thunk';

const history = createHistory();

let middlewares = [];
middlewares.push(routerMiddleware(history));
middlewares.push(thunk);

let middleware = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const preloadedState = window.__PRELOADED_STATE__;

// delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState || {}, middleware);

export { store, history };
