import * as t from "@store/constants/theme";

const ThemeReducer = (
  state = {
    mode: "light",
  },
  action
) => {
  switch (action.type) {
    case t.SET_THEME:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return { ...state };
  }
};

export default ThemeReducer;
