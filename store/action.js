import { FETCH_DATA } from "./actionType";
export const fechdata = (payload) => {
  // console.log("action",data)
  return {
    type: FETCH_DATA,
    payload,
  };
};
