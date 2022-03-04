import * as t from "@store/constants/theme";

export const setTheme = (data) => ({
  type: t.SET_THEME,
  payload: data,
});
