import React from 'react';
import Fade from 'react-reveal/Fade';

const aboutText = `Information about Labelle Rabbitry.`;

function About(props) {

  return(
    <>
    <Fade>
      <div className="spacer" />
      <div className="div-info stitching drop-shadow">
        <p>{aboutText}</p>
      </div>
    </Fade>
    </>
  );
}

export default About;
