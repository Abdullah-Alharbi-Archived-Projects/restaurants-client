import storage from "../services/localStorage.service";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  _id: "",
  authenticated: false
};

const reducer = (state = initialState, { type, value }) => {
  let stateClone = { ...state };

  switch (type) {
    case "SET_USER_ASYNC":
      storage.setKey("token", value.token);
      stateClone.authenticated = true;
      return stateClone;

    case "IS_AUTHENTICATED_ASYNC":
      stateClone.authenticated = true;
      return stateClone;

    case "SET_USER_OBJECT_ASYNC":
      stateClone._id = value._id;
      stateClone.firstName = value.firstName;
      stateClone.lastName = value.lastName;
      stateClone.email = value.email;

      return stateClone;

    case "DESTROY_USER_ASYNC":
      stateClone = {
        firstName: "",
        lastName: "",
        email: "",
        _id: "",
        authenticated: false
      };
      storage.destroyKey("token");
      return stateClone;

    default:
      return state;
  }
};

export default reducer;
