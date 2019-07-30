export const createStore = (reducer, initState) => {
  let state = initState;
  return {
    dispatch: (action) => {
      state = reducer(state, action);
    },
    getState: () => state
  };
};
