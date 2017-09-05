import { AUTH_USER,UNAUTH_USER, AUTH_ERROR, AUTH_MESSAGE, FETCH_MESSAGE, CLEAN_MSG  } from '../actions/types';

export default function(state={}, action) {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true};
    case UNAUTH_USER:
      return { ...state, authenticated: false};
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case AUTH_MESSAGE:
      return { ...state, message: action.payload };      
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
    case CLEAN_MSG:
      {
        delete state.message;
        delete state.error;
        return state;
      }
  };
  return state;

}
