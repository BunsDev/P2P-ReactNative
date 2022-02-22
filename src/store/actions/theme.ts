import * as t from '@store/constants/theme';

export const setTheme = (data: any) => ({
  type: t.SET_THEME,
  payload: data,
});
