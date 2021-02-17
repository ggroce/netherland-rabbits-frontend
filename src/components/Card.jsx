import React from 'react';
import Fade from 'react-reveal/Fade';

const Card = ({ name, type, DOB, awards, status, sex }) => {
  return(
    <>
      <article className="tc bg-white dib br3 pa4 ma2 mv2 ba b--black-20 grow shadow-5 w5">
        {/* <div className='tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5'> */}
        <Fade>
          <img src="https://lh3.googleusercontent.com/869xDoDxyUSqaxZxcpldiNHvO75HU4gg-lLEb-8U8uXtspgOjVhCY5Ff_jeujufZwoCJuDRrPPYKg8VW0RBgaIhWkITqqlGhTEAwO_g3dRtUbAAswH0T8RfEKMf6DQGFCGo3yJZMFQ" 
            className="br-100 ba h4 w4 dib" title="Photo of a rabbit" />
          <h2>{name}</h2>
          <div className="lh-solid">
            <hr className="center mw4 bb bw1 b--black-40" />
            <p><strong>Type: </strong>{type}</p>
            <p><strong>DOB: </strong>{DOB}</p>
            <p><strong>Awards: </strong>{awards}</p>
            <p><strong>Status: </strong>{status}</p>
            <p><strong>Sex: </strong>{sex}</p>
          </div>
        </Fade>
      </article>
    </>
  );
}

export default Card;
