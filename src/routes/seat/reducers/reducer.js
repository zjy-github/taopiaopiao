const seats = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SEAT' :
      return [
          ...state,
          seat
        ]
    case 'REMOVE_SEAT': 
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export default seats;