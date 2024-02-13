const getData = async () => {
  const response = await fetch('greeting');
  const data = await response.json()
  return data
}

// Actions

const DISPLAY_GREETINGS = 'hello-world-rails-react/arrReducer/DISPLAY_GREETINGS';


// Reducers

const initialState = [];

export const appRed = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_GREETINGS:
      return action.payload;

    default:
      return state;
  }
};

// Action creator

export const displayGreetings = () => async (dispatch) => {
  const greet = await getData();

  dispatch({
    type: DISPLAY_GREETINGS,
    payload: greet,
  });
};


