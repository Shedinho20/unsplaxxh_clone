import { photos } from "../constant";
import * as act from "../constant";
const initialstate = {
  photos: [
    {
      id: 1,
      url:
        "https://images.unsplash.com/photo-1610400131057-851685802145?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80",
    },
    {
      id: 2,
      url:
        "https://images.unsplash.com/photo-1610376541408-0deb8c3f1183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
      id: 3,
      url:
        "https://images.unsplash.com/photo-1610393717084-4af3cb4098d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
    {
      id: 4,
      url:
        "https://images.unsplash.com/photo-1610405778726-c8cd44d1b400?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      url:
        "https://images.unsplash.com/photo-1610389051254-64849803c8fd?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 6,
      url:
        "https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 6,
      url:
        "https://images.unsplash.com/photo-1610406402601-09c5de54b9f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1014&q=80",
    },
    {
      id: 6,
      url:
        "https://images.unsplash.com/photo-1605310890188-8abe1fe4914e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ],
};

const photoReducer = (state = initialstate, action: photos) => {
  switch (action.type) {
    case act.GETPHOTOS:
      return state;
    default:
      return state;
  }
};

export default photoReducer;
