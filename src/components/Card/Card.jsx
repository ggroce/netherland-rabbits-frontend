import React, { useState } from 'react';
import './Card.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Card = ({ name, type, DOB, awards, status, sex }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

 const rotateCard = (e) => {
    if (e.target.id === 'inquire-button') {
    } else {
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
              <h2>{name}</h2>
              <hr />
              <p><strong>Type: </strong>{type}</p>
              <p><strong>DOB: </strong>{DOB}</p>
              <p><strong>Awards: </strong>{awards}</p>
              <p><strong>Status: </strong>{status}</p>
              <p><strong>Sex: </strong>{sex}</p>
            </div>
          <div>
            <button id="inquire-button" onClick={onOpenModal} style={{marginTop: "1.5rem", marginRight: ".5rem"}}>Click  here to inquire</button>
          </div>
        </article>

        <article className="card-back stitching">
          <div className="card-back-details">
            <h2>{name}</h2>
            <hr />
            <p>We can put even more information on the back of the card here.  </p>
          </div>
        </article>
    
      </div>
    </div>

    <Modal open={open} onClose={onCloseModal} center>
      <h2>Simple centered modal</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
        hendrerit risus, sed porttitor quam.
      </p>
    </Modal>
    </>
  );
}

export default Card;
