export const reducer = (state, action) => {
  switch (action.type) {
    case 'FIRST_MEMBER_VOTE':
      state[0].votes++;
      return state;
    case 'SECOND_MEMBER_VOTE':
      state[1].votes++;
      return state;
    default:
      return state;
  }
};
