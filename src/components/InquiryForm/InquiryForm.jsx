import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendInquiryForm } from '../../actions'

function InquiryForm({ name }) {
  
  const dispatch = useDispatch();
  const onSendInquiryForm = () => {
    dispatch(sendInquiryForm());
  }

  const { isPending, sendSuccess, err } = useSelector((state) => state.sendInquiryForm);

  return(
    <>
      <h4 style={{marginTop: ".7rem", marginBottom: "0"}}>Interested in {name}?</h4>
      <h5 style={{marginTop: "0", marginLeft: "1rem", marginBottom: "0"}}>Please let us know!</h5>
      <form action="">
          <p>
            <label htmlFor="firstLastName">
              First and last name: <br />
              <input type="text" />
            </label>
          </p>
          <p>
            <label htmlFor="emailAddress">
              Email address: <br /> 
              <input type="text" />
            </label>
          </p>
          <button>test</button>
          <input type="submit" value="Submit" />
        </form>
    </>
  );
}

export default InquiryForm;
