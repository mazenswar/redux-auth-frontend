// const initialState = {};

export default (state = {}, { type, payload }) => {
  switch (type) {
    case "LOGIN":
    case "SIGNUP":
    case "PERSIST":
      return payload;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
