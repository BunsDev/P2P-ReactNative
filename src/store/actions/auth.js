import * as t from "@store/constants/auth";

export const setAuthState = (data) => ({
  type: t.AUTH_STATE,
  payload: data,
});
