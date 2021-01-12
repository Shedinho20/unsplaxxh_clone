import { Auth } from "../constant";
import * as act from "../constant";

const initialstate = {
  loggedIn: true,
};

const authReducer = (state = initialstate, action: Auth) => {
  switch (action.type) {
    case act.LOGGEDIN:
      return state;
    default:
      return state;
  }
};

export default authReducer;
