const initState = [];
export const rootReducer = (state = initState, { type, payload }) => {
switch (type) {
  case 'SEND_NAME':
    return [...state, payload ]
    default:
      return state;
  }
};

export default rootReducer;