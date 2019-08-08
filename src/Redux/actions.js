// Action creators

const loginUserAction = user => ({
  type: "LOGIN",
  payload: user
});

const logoutUser = () => ({
  type: "LOGOUT"
});

const signupUser = user => ({
  type: "SIGNUP",
  payload: user
});

const persistUser = user => ({
  type: "PERSIST",
  payload: user
});

// Fetch

const persistUserFromDB = () => dispatch => {
  const config = {
    headers: { Authorization: "bearer " + localStorage.token }
  };
  fetch("http://localhost:3000/auth", config)
    .then(r => r.json())
    .then(user => {
      dispatch(persistUser(user));
    });
};

const createNewUserToDB = user => dispatch => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };

  fetch("http://localhost:3000/users", config)
    .then(r => r.json())
    .then(data => {
      localStorage.token = data.token;
      dispatch(signupUser(data.user));
    });
};

//
const loginUserToDB = user => dispatch => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };
  fetch("http://localhost:3000/login", config)
    .then(r => r.json())
    .then(data => {
      localStorage.token = data.token;
      dispatch(loginUserAction(data.user));
    });
};

const logoutUserFromStore = () => dispatch => {
  localStorage.clear();
  dispatch(logoutUser());
};

export default {
  loginUserToDB,
  createNewUserToDB,
  persistUserFromDB,
  logoutUserFromStore
};
