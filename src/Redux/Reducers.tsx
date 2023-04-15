import { combineReducers } from 'redux';
import CountrySlice from './CountrySlice';

const rootReducer = combineReducers({
  countrylist: CountrySlice,
});

export default rootReducer;
