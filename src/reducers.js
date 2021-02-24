import { REQUEST_INVENTORY_PENDING, REQUEST_INVENTORY_SUCCESS, 
  REQUEST_INVENTORY_FAILED, SEND_INQUIRYFORM_PENDING, 
  SEND_INQUIRYFORM_SUCCESS, SEND_INQUIRYFORM_FAILED } from './constants';

const initialStateInventory = {
  isPending: false, 
  inventory: [], 
  err: '', 
}

const initialStateInquiryForm = {
  isPending: false, 
  sendSuccess: false, 
  err: '',
}

export const requestInventory = (state=initialStateInventory, action={}) => {
  switch(action.type) {
    case REQUEST_INVENTORY_PENDING: 
      return Object.assign({}, state, { isPending: true });
    case REQUEST_INVENTORY_SUCCESS: 
      return Object.assign({}, state, { inventory: action.payload, isPending: false });
    case REQUEST_INVENTORY_FAILED: 
      return Object.assign({}, state, { err: action.payload, isPending: false });
    default: 
      return state;
  }
}

export const sendInquiryForm = (state=initialStateInquiryForm, action={}) => {
  switch(action.type) {
    case SEND_INQUIRYFORM_PENDING:
      return Object.assign({}, state, { isPending: true });
    case SEND_INQUIRYFORM_SUCCESS:
      return Object.assign({}, state, { sendSuccess: true, isPending: false });
    case SEND_INQUIRYFORM_FAILED: 
      return Object.assign({}, state, { err: action.payload, sendSuccess: false, isPending: false});
    default: 
      return state;
  }
}
