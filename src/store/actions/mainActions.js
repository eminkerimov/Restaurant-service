import { SET_DATA } from "./actionTypes";
import axios from "axios";

export function getBlock() {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/db.json`)
      .then((response) => {
        const data = response.data;
        dispatch({
          type: SET_DATA,
          payload: data,
        });
      })
      .catch((err) => {});
  };
}
