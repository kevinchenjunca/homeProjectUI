import axios from 'axios';
import { browserHistory} from 'react-router';
import { AUTH_USER,UNAUTH_USER, AUTH_ERROR, AUTH_MESSAGE, FETCH_MESSAGE,FETCH_WEATHER,CLEAN_MSG } from './types';
import { url as ROOT_URL } from '../config/system-config';

const API_KEY  = "ef35dd4d250030bfe576171129487c63";
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function signinUser({email, password}) {
  return function(dispatch) {
      axios.post(`${ROOT_URL}/signin`, {email, password})
        .then(response => {
          dispatch({type: AUTH_USER});
          localStorage.setItem('token', response.data.token);
          browserHistory.push('/home');
        })
        .catch(response =>{
          dispatch(authError("Login Failed!"))
        });
  }
}

export function signupUser({email, password}) {

  return function(dispatch) {
      axios.post(`${ROOT_URL}/signup`, {email, password})
        .then(response => {
          browserHistory.push('/activation');
          dispatch(authMessage(response.data.message))
        })
        .catch(response =>{
          dispatch(authError(response.response.data.error))
        });
  }

}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER}
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function authMessage(message) {
  return {
    type: AUTH_MESSAGE,
    payload: message
  }
}

export function cleanMessage() {
  return {
    type: CLEAN_MSG
  }
}

export function fetchMessage() {
  return function(dispatch) {
      axios.get(ROOT_URL,{
        headers: {authorization: localStorage.getItem('token')}
      })
        .then(response => {
          dispatch({
            type:FETCH_MESSAGE,
            payload: response.data.message
          });
        });
  }
}

export function fetchWeather(city) {

  const url = `${WEATHER_URL}&units=metric&q=${city},ca`;
  
  return function(dispatch) {
      axios.get(url)
        .then(response => {
         // debugger;
          dispatch({
            type:FETCH_WEATHER,
            payload: response.data
          });
        });
  }
}

export function activate(token) {
  console.log(token);
  console.log(ROOT_URL);
  return function(dispatch) {
      axios.get(`${ROOT_URL}/activate`,{
        headers: {authorization: token}
      })
        .then(response => {
          dispatch({
            type:FETCH_MESSAGE,
            payload: response.data.message
          });
        })
        .catch(response =>{
          dispatch({
            type:FETCH_MESSAGE,
            payload: response.message
          });
        });
  }
}

export function selectPlace(place) {
  return {
    type: 'PLACE_SELECTED',
    payload: place
  }
}




