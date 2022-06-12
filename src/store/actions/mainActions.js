
import { SET_VALUE } from './actionTypes';
import axios from 'axios';


export function getBlock(blockId) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    axios
      .get(`/api/get_block?id=${blockId}`)
      .then((response) => {
        const data = response.data;
        dispatch({
          ...data,
          type: SET_VALUE,
        });
        dispatch({ type: SET_LOADER, payload: false });
      })
      .catch((err) => {
        dispatch({ type: SET_LOADER, payload: false });
      });
  };
}
