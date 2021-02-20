import React from 'react';
import './Card.css';

const Card = ({ name, type, DOB, awards, status, sex }) => {
  return(
    <>
    <div className="flip-wrapper">
      <div className="flip-wrapper-inner">

        <article className="card-front stitching">
          <img src="https://lh3.googleusercontent.com/869xDoDxyUSqaxZxcpldiNHvO75HU4gg-lLEb-8U8uXtspgOjVhCY5Ff_jeujufZwoCJuDRrPPYKg8VW0RBgaIhWkITqqlGhTEAwO_g3dRtUbAAswH0T8RfEKMf6DQGFCGo3yJZMFQ" 
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
    </>
  );
}

export default Card;
