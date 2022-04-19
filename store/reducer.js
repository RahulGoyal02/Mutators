import { FETCH_DATA } from "./actionType";

const initial = { emp: [] };

export const reducer = (state = initial, { type, payload }) => {
    // console.log(type,payload)
  switch (type) {
    case FETCH_DATA: {
      return {
        ...state,
        emp: payload,
      };
    }
    default: {
      return state;
    }
  }
};
