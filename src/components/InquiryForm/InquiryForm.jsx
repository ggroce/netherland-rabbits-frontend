import React, { useEffect, useLayoutEffect, useState } from 'react';
import './InquiryForm.css';

function InquiryForm({ rabbitName, onCloseModal }) {
  let closeModal = onCloseModal;

  let [custName, setCustName] = useState('');
  let [custEmail, setCustEmail] = useState('');
  let [custMessage, setCustMessage] = useState('');
  let [formStatus, setFormStatus] = useState('');

  const onSendInquiryForm = (event) => {
    setFormStatus('');
    if (!custName || !custEmail|| !custMessage) {
      return;
    }

    event.preventDefault(); //prevent form submission from reloading entire page
    document.getElementById('custName').disabled=true;
    document.getElementById('custEmail').disabled=true;
    document.getElementById('custMessage').disabled=true;
    document.getElementById('submitButton').disabled=true;

    sendInquiryForm(custName, custEmail, custMessage, rabbitName);
  }

  const sendInquiryForm = (custName, custEmail, custMessage, rabbitName) => {
    (async function () {
      try {
        setFormStatus('pending');

        const res = await fetch('http://localhost:31775/rabbit-inquiry', {
          method: 'post', 
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify({
            custName: custName, 
            custEmail: custEmail, 
            custMessage: custMessage, 
            rabbitName: rabbitName, 
          })
        });
        const resJson = await res.json();
        //check resJson here?
        if (closeModal) {
          console.log('closemodal after success: ', closeModal);
          setFormStatus('success');
          setTimeout(() => {if(closeModal){onCloseModal()}}, 5000);
        }
      } catch(err) {
        if (closeModal) {
          console.log('closemodal in catch: ', closeModal);
          setFormStatus('error');
          console.log('Rabbit Inquiry error: ', err);
          document.getElementById('custName').disabled=false;
          document.getElementById('custEmail').disabled=false;
          document.getElementById('custMessage').disabled=false;
          document.getElementById('submitButton').disabled=false;
        }
      }
    }());
  }

  const FormStatus = ({status}) => {
    
    // useEffect(() => {

    //   return () => {
    //     closeModal = null;
    //   }
    // }, []);

    switch(status) {
      case 'pending': 
        return (<h5>Sending message...</h5>);
      case 'success':
        return (<h5>Message sent, thank you for your interest!</h5>);
      case 'error':
        return (<h5 style={{color: "red"}}>Error sending message, please try again later!</h5>);
      default: 
        return '';
    }
  }

  useEffect(() => {

    return () => {
      console.log('closemodal in useeffect before nulling: ', closeModal);
      closeModal = null;
      console.log('modal closed');
      console.log('closemodal is now null hopefully?', closeModal);
    }
  }, [formStatus]);

  return(
    <>
      <h4 style={{marginTop: ".7rem", marginBottom: "0"}}>Interested in {rabbitName}?</h4>
      <h5 style={{marginTop: "0", marginLeft: "1rem", marginBottom: "0"}}>Please let us know!</h5>
      <form>
          
        <label htmlFor="name">
          Name: <br />
          <input 
            type="text" 
            id="custName" 
            value={custName}
            onChange={e => setCustName(e.target.value)} 
            required/>
        </label>
        <br />

        <label htmlFor="email">
          Email address: <br /> 
          <input 
            type="email" 
            id="custEmail" 
            value={custEmail}
            onChange={e => setCustEmail(e.target.value)} 
            required/>
        </label>
        <br />

        <label htmlFor="message">
          <strong style={{marginBottom: "0", fontSize: ".85rem"}}>
            Share a bit about yourself 
            <br />
            (area you're from, experience with rabbits, etc):  
            <br />
          </strong>
          <textarea 
            type="text" 
            rows="5" 
            id="custMessage" 
            value={custMessage}
            onChange={e => setCustMessage(e.target.value)} 
            required/>
        </label>
        <br />
        <strong style={{marginBottom: "0", fontSize: ".85rem"}}>
        Please be sure and read our pet and shipping policy!
        </strong>
        <br />

        <div id="submissionResults">
          <FormStatus status={formStatus} />
        </div>

        <button id="submitButton" onClick={(e) => onSendInquiryForm(e)}>Submit</button>
      </form>
    </>
  );
}

export default InquiryForm;
