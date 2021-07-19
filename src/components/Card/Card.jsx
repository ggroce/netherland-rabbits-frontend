import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Card.css';
import InquiryForm from '../InquiryForm/InquiryForm.jsx';

const Card = ({ rabbitry, rabbitName, rabbitType, rabbitDOB, 
    rabbitAwards, rabbitStatus, rabbitSex }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const imageSmall = `/images_small/${rabbitry}_${rabbitName}_01.jpg`;
  const imageLarge = `/images_large/${rabbitry}_${rabbitName}_01.jpg`;

  const rotateCard = (e) => {
    if (e.target.id !== 'inquire-button') {
      e.currentTarget.classList.toggle('card--flipped');
    } 
  }

  return(
    <>
    <div  onClick={rotateCard} className="flip-wrapper">
      <div className="flip-wrapper-inner">

        <article className="card-front stitching">
            <img className="card-img-avatar" 
              src={imageSmall} 
              alt={rabbitName}
              loading="lazy" 
              title="Photo of a rabbit" 
            />
            
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
            <button id="inquire-button" onClick={() => setOpen(true)} 
              style={{marginTop: "1.2rem", marginRight: ".5rem"}}>Click  here to inquire
            </button>
          </div>
        </article>

        <article className="card-back stitching">
          <div className="card-back-inset">
            <div className="card-back-details">
              <div className="card-img-avatar card-img-avatar-cover">
                <div className="space-name">
                  {rabbitName}
                </div>
              </div>
              <img
                className="card-large-img"
                height="200"
                src={imageLarge} 
                alt={rabbitName}
                loading="lazy" 
                title="Large photo of a rabbit" 
              />
            </div>
          </div>
        </article>
        
      </div>
    </div>

    <Modal open={open} onClose={onCloseModal} center 
      classNames={{modal: 'div-info stitching drop-shadow'}} focusTrapped={true}>
      <InquiryForm rabbitName={rabbitName} onCloseModal={onCloseModal}/>
    </Modal>
    </>
  );
}

export default Card;
