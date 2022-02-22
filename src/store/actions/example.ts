import * as t from '@store/constants/example';

export const setExample = (data: any) => ({
  type: t.EXAMPLE,
  payload: data,
});
