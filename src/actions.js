import {
  REQUEST_INVENTORY_PENDING,
  REQUEST_INVENTORY_SUCCESS,
  REQUEST_INVENTORY_FAILED,
  SEND_INQUIRYFORM_PENDING,
  SEND_INQUIRYFORM_SUCCESS,
  SEND_INQUIRYFORM_FAILED,
} from "./constants";
import { DOMAIN_API_URL } from "./constants";

export const requestInventory = () => (dispatch) => {
  dispatch({ type: REQUEST_INVENTORY_PENDING });

  (async function () {
    try {
      const res = await fetch(`${DOMAIN_API_URL}/inventory`);
      const resJson = await res.json();
      dispatch({
        type: REQUEST_INVENTORY_SUCCESS,
        payload: resJson,
      });
    } catch (err) {
      dispatch({
        type: REQUEST_INVENTORY_FAILED,
        payload: err,
      });
      console.log("Rabbit Inventory error, ", err);
    }
  })();
};

export const sendInquiryForm =
  (custName, custEmail, custMessage, rabbitName) => (dispatch) => {
    dispatch({ type: SEND_INQUIRYFORM_PENDING });

    (async function () {
      try {
        const res = await fetch(`${DOMAIN_API_URL}/rabbit-inquiry`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            custName: custName,
            custEmail: custEmail,
            custMessage: custMessage,
            rabbitName: rabbitName,
          }),
        });
        const resJson = await res.json();
        dispatch({
          type: SEND_INQUIRYFORM_SUCCESS,
          payload: resJson,
        });
        console.log(resJson);
      } catch (err) {
        dispatch({
          type: SEND_INQUIRYFORM_FAILED,
          payload: err,
        });
        console.log("Rabbit Inquiry error: ", err);
      }
    })();
  };
