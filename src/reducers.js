import { REQUEST_INVENTORY_PENDING, REQUEST_INVENTORY_SUCCESS, 
  REQUEST_INVENTORY_FAILED } from './constants';

const initialStateInventory = {
  isPending: false, 
  inventory: [], 
  err: '', 
}

export const requestInventory = (state=initialStateInventory, action={}) => {
  switch(action.type) {
    case REQUEST_INVENTORY_PENDING: 
      return Object.assign({}, state, { isPending: true });
    case REQUEST_INVENTORY_SUCCESS: 
      return Object.assign({}, state, { inventory: action.payload, isPending: false });
    case REQUEST_INVENTORY_FAILED: 
      return Object.assign({}, state, {err: action.payload, isPending: false });
    default: 
      return state;
  }
}