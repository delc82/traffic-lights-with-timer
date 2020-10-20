const initialState = {
  isRedOn: true,
  isYellowOn: false,
  isGreenOn: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "RED":
      return {
        isRedOn: true,
        isYellowOn: false,
        isGreenOn: false
      };
    case "YELLOW":
      return {
        isRedOn: false,
        isYellowOn: true,
        isGreenOn: false
      };
    case "GREEN":
      return {
        isRedOn: false,
        isYellowOn: false,
        isGreenOn: true
      };
    default:
      return state;
  }
}
