import storeMock from "../../mock/store";

const INITIAL_STATE = {
  items: [...storeMock],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
