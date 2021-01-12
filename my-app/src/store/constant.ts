export const GETPHOTOS = "GETPHOTOS";
export const SAVEDPHOTO = "SAVEDPHOTO";
export const LOGGEDIN = "LOGGEDIN";
export const LOGGEDOUT = "LOGGEDOUT";

// PHOTOS
interface GETPHOTOS {
  type: typeof GETPHOTOS;
  payload: any;
}

interface SAVEDPHOTO {
  type: typeof SAVEDPHOTO;
  payload: any;
}

//AUTH
interface LOGGEDIN {
  type: typeof LOGGEDIN;
  payload: any;
}
interface LOGGEDOUT {
  type: typeof LOGGEDOUT;
  payload: any;
}

export type photos = SAVEDPHOTO | GETPHOTOS;
export type Auth = LOGGEDIN | LOGGEDOUT;

export type Action = photos | Auth;
