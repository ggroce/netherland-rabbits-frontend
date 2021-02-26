import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendInquiryForm } from '../../actions'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Card.css';
// import InquiryForm from '../InquiryForm/InquiryForm.jsx';
// import InquiryForm from '../InquiryForm/InquiryForm';

const Card = ({ rabbitName, rabbitType, rabbitDOB, rabbitAwards, rabbitStatus, rabbitSex }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => { 
    setOpen(false);
    setCustEmail('');
    setCustName('');
    setCustMessage('');
  }

 const rotateCard = (e) => {
    if (e.target.id !== 'inquire-button') {
      e.currentTarget.classList.toggle('card--flipped');
    } 
  }

  const [custName, setCustName] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [custMessage, setCustMessage] = useState('');

  const { isPending, err } = useSelector((state) => state.sendInquiryForm);

  const dispatch = useDispatch();
  const onSendInquiryForm = (e) => {
    e.preventDefault();
    dispatch(sendInquiryForm(custName, custEmail, custMessage, rabbitName));
    onCloseModal();
  }

  return(
    <>
    <div  onClick={(e) => rotateCard(e)} className="flip-wrapper">
      <div className="flip-wrapper-inner">

        <article className="card-front stitching">
            <img className="card-front-img" 
              src="https://lh3.googleusercontent.com/869xDoDxyUSqaxZxcpldiNHvO75HU4gg-lLEb-8U8uXtspgOjVhCY5Ff_jeujufZwoCJuDRrPPYKg8VW0RBgaIhWkITqqlGhTEAwO_g3dRtUbAAswH0T8RfEKMf6DQGFCGo3yJZMFQ" 
              loading="lazy" title="Photo of a rabbit" />
            <div className="card-front-details">
              <h2>{rabbitName}</h2>
              <hr />
              <p><strong>Type: </strong>{rabbitType}</p>
              <p><strong>DOB: </strong>{rabbitDOB}</p>
              <p><strong>Awards: </strong>{rabbitAwards}</p>
              <p><strong>Status: </strong>{rabbitStatus}</p>
              <p><strong>Sex: </strong>{rabbitSex}</p>
            </div>
          <div>
            <button id="inquire-button" onClick={() => setOpen(true)} style={{marginTop: "1.2rem", marginRight: ".5rem"}}>Click  here to inquire</button>
          </div>
        </article>

        <article className="card-back stitching">
          <div className="card-back-details">
            <h2>{rabbitName}</h2>
            <hr />
            <p>We can put even more information on the back of the card here.  </p>
          </div>
        </article>
    
      </div>
    </div>




    <Modal open={open} onClose={() => setOpen(false)} center>



      <h4 style={{marginTop: ".7rem", marginBottom: "0"}}>Interested in {rabbitName}?</h4>
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
            <br />
            <strong style={{marginBottom: "0", fontSize: ".85rem"}}>
            Please be sure and read our pet and shipping policy!
            </strong>
          </p>

          <button onClick={(e) => onSendInquiryForm(e)}>Submit</button>
          {/* <input onClick={() => onSendInquiryForm()} type="submit" value="Submit" /> */}
          <br />
        </form>


      {/* <InquiryForm name={name}/> */}
    </Modal>
    </>
  );
}

export default Card;
