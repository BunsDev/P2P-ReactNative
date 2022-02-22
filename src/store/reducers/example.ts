import * as t from '@store/constants/example';

const ExampleReducer = (
  state = {
    info: {} /** TODO: infer type */,
  },
  action: any
) => {
  switch (action.type) {
    case t.EXAMPLE:
      return {
        ...state,
        info: action.payload,
      };
    default:
      return { ...state };
  }
};

export default ExampleReducer;
