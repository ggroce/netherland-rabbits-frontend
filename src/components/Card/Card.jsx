import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Card.css';
import InquiryForm from '../InquiryForm/InquiryForm.jsx';

const Card = ({ rabbitName, rabbitType, rabbitDOB, rabbitAwards, rabbitStatus, rabbitSex }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

 const rotateCard = (e) => {
    if (e.target.id !== 'inquire-button') {
      e.currentTarget.classList.toggle('card--flipped');
    } 
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

    <Modal open={open} onClose={onCloseModal} center classNames={{modal: 'div-info stitching drop-shadow'}} focusTrapped={true}>
      <InquiryForm rabbitName={rabbitName} onCloseModal={onCloseModal}/>
    </Modal>
    </>
  );
}

export default Card;
