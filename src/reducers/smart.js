const smart = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_INIT_SMART':
      return { init: true };
    case 'RECEIVE_INIT_SMART':
      return action.smart;
    default:
      return state
  }
}

export default smart