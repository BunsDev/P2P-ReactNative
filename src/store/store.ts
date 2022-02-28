import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//  @reducers
import AuthReducer from '@store/reducers/auth';
import ThemeReducer from './reducers/theme';

const rootReducer = combineReducers({
  auth: AuthReducer,
  theme: ThemeReducer,
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default configureStore;
