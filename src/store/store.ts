import { createStore, combineReducers } from 'redux';
import ExampleReducer from '@store/reducers/example';
import ThemeReducer from './reducers/theme';

const rootReducer = combineReducers({
  example: ExampleReducer,
  theme: ThemeReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
