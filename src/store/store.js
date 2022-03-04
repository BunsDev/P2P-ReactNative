import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//  @reducers
import ThemeReducer from "./reducers/theme";
import AuthReducer from "./reducers/auth";

const rootReducer = combineReducers({
  theme: ThemeReducer,
  auth: AuthReducer,
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

export default configureStore;
