import { REQUEST_INVENTORY_PENDING, REQUEST_INVENTORY_SUCCESS, 
  REQUEST_INVENTORY_FAILED } from './constants';

export const requestInventory = () => (dispatch) => {
  dispatch({ type: REQUEST_INVENTORY_PENDING });

  (async function () {
    try {
      const res = await fetch('http://localhost:31775/inventory');
      const resJson = await res.json();
      dispatch({ 
        type: REQUEST_INVENTORY_SUCCESS, 
        payload: resJson, 
       });
       console.log('requested inventory: ', resJson);
    } catch(err) {
      dispatch({ 
        type: REQUEST_INVENTORY_FAILED, 
        payload: err, 
      });
      console.log('requestInventory in async function of actions.js messed up!!!', 
      err);
    }
  }());
}