import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import photoReducer from "../reducers/photoReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  photo: photoReducer,
});

export interface state {
  auth: {
    loggedIn: boolean;
  };
  photo: {
    photos: {
      id: number;
      url: string;
    }[];
  };
}
