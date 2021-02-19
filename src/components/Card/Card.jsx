import React from 'react';
import './Card.css';

const Card = ({ name, type, DOB, awards, status, sex }) => {
  return(
    <>
    <div className="flip-wrapper">
      <div className="flip-wrapper-inner">


      <article className="rabbit-card">

          <img src="https://lh3.googleusercontent.com/869xDoDxyUSqaxZxcpldiNHvO75HU4gg-lLEb-8U8uXtspgOjVhCY5Ff_jeujufZwoCJuDRrPPYKg8VW0RBgaIhWkITqqlGhTEAwO_g3dRtUbAAswH0T8RfEKMf6DQGFCGo3yJZMFQ" 
            loading="lazy" title="Photo of a rabbit" />
          <h2>{name}</h2>
          <div className="rabbit-card-front">
            <hr />
            <p><strong>Type: </strong>{type}</p>
            <p><strong>DOB: </strong>{DOB}</p>
            <p><strong>Awards: </strong>{awards}</p>
            <p><strong>Status: </strong>{status}</p>
            <p><strong>Sex: </strong>{sex}</p>
          </div>

      </article>
      
      </div>
    </div>
    </>
  );
}

export default Card;
