import { toast } from "react-toastify";
const initialState = {
  notify: () => toast("Welcome ")
};

const reducer = (state = initialState, { type, value }) => {
  const stateClone = { ...state };

  switch (type) {
    default:
      return stateClone;
  }
};

export default reducer;
