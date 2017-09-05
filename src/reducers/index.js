import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import authenReducer from './auth_reducer';
import weatherReducer from './weather_reducer';
import vancouver from './vancouver_reducer';

const rootReducer = combineReducers({
  form,
  auth: authenReducer,
  weather: weatherReducer,
  vancouver: vancouver
});

export default rootReducer;
