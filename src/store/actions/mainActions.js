import { LocalStorageAuthUtil } from './utils';
import iaxios from './../../iaxios';

import { SET_VALUE } from './actionTypes';

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getBlock(blockId) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios
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
        //dispatch({ type: SET_AUTH_ERROR, payload: true });
        dispatch({ type: SET_LOADER, payload: false });
      });
  };
}
