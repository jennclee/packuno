import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import packunoApp from './reducers/index.reducers.jsx';
import Weather from './containers/Weather.container.jsx';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import lime from 'material-ui/colors/lime';
import thunk from 'redux-thunk';
import reducer from './reducers/index.reducers';
import seedState from './seedState';
import Trip from './components/Trip.component';
import Dashboard from './components/Dashboard.component';
import LoginCont from './containers/Login.container';
import Root from './components/Root.component';

const store = createStore(
  reducer,
  seedState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
window.store = store;

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: lime,
  },
  status: {
    danger: 'orange',
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={Root} />
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app'),
);

