import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendInquiryForm } from '../../actions'

function InquiryForm({ name }) {
  const [open, setOpen] = useState(false);

  let rabbitName = name;
  const [custName, setCustName] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [custMessage, setCustMessage] = useState('');

  const { isPending, err } = useSelector((state) => state.sendInquiryForm);

  const dispatch = useDispatch();
  const onSendInquiryForm = (e) => {
    e.preventDefault();
    dispatch(sendInquiryForm(custName, custEmail, custMessage, rabbitName));
    setOpen(false);
  }

  return(
    <>
      <h4 style={{marginTop: ".7rem", marginBottom: "0"}}>Interested in {name}?</h4>
      <h5 style={{marginTop: "0", marginLeft: "1rem", marginBottom: "0"}}>Please let us know!</h5>
      <form>
          <p>
            <label htmlFor="name">
              Name: <br />
              <input 
                type="text" 
                id="name" 
                value={custName}
                onChange={e => setCustName(e.target.value)} 
                required/>
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Email address: <br /> 
              <input 
                type="email" 
                id="email" 
                value={custEmail}
                onChange={e => setCustEmail(e.target.value)} 
                required/>
            </label>
          </p>
          <p>
            <label htmlFor="message">
              <strong style={{marginBottom: "0", fontSize: ".85rem"}}>Share a bit about yourself 
                <br />
                (area you're from, experience with rabbits, etc):  
                <br />
              </strong>
              <textarea 
                type="text" 
                rows="5" 
                id="message" 
                value={custMessage}
                onChange={e => setCustMessage(e.target.value)} />
            </label>
          </p>
          <button onClick={(e) => onSendInquiryForm(e)}>Submit</button>
          {/* <input onClick={() => onSendInquiryForm()} type="submit" value="Submit" /> */}
          <br />
          Please be sure and read our pet and shipping policy!
        </form>
    </>
  );
}

export default InquiryForm;
