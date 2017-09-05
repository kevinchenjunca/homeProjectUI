import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import YoutubeSearch from './components/youtubesearch/youtubeSearch';
import WeatherForecast from './components/weatherforecast/weatherForecast';
import Vancouver from './components/vancouver/vancouver';
import Home from './components/home';
import RequireAuth from './components/require_authentication';
import Welcome from './components/welcome';
import {AUTH_USER} from './actions/types';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import './style/style.css';
import Activation from './components/activation';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="youtubesearch" component={RequireAuth(YoutubeSearch)} />
        <Route path="weatherforecast" component={RequireAuth(WeatherForecast)} />
        <Route path="vancouver" component={RequireAuth(Vancouver)} />        
        <Route path="home" component={RequireAuth(Home)} />
        <Route path="activation" component={Activation} />        
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.app'));
