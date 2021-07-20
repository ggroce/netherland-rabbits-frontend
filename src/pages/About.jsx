import React from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';

const aboutText = {
  header: 
    `About La Belle Rabbitry`, 
  details01: 
    `Thank you for your interest in La Belle Rabbits.  We are from League City, 
    Texas, and have been raising Netherland Dwarf rabbits for approxiamtely 4 years.  
    Throughout our venture into breeding, we have taken pride in feeding our rabbits quality 
    foods, (Pen Pals Show), and filtered water, while providing them with great air conditioned shelters to last 
    the Texas heat and humidity.  `, 
  details02: 
    `Over the years we have traveled to regional rabbit shows, where our rabbits have won 
    multiple awards.  The competitions have resulted in 5 Grand Champion rabbits, and many 'legs' 
    have been aquired for our rabbits.  `,
  details03: 
    `We are currently have many rabbits looking for new homes.  If you are interested in 
    owning a Netherland Dwarf, either for breeding purposes or as a pet, please explore 
    the website and fill out the accompanying contact form.  While we prefer buyers to 
    be within driving distance, shipping rabbits through parties of our choice will be 
    considered.  If picking up a rabbit directly from our rabbitry, the buyer has the 
    option to purchase a cage for their rabbit at a large discount.  See the 'Policies' page 
    for information critical to the purchasing of a rabbit through La Belle Rabbitry.  `, 
  details04: 
  `See below for some great learning resources about raising Netherland Dwarf rabbits: `,
}

const outBoundLinks = {
  link1: {  
    displayName: 'Rabbit Pedia',
    url: 'https://rabbitpedia.com',
    title: 'Rabbit Pedia'
  },
  link2: {
    displayName: 'American Rabbit Breeders Association', 
    url: 'https://www.arba.org',
    title: 'American Rabbit Breeders Association'
  },
  link3: { 
    displayName: 'Texas Rabbit Breeders Association',
    url: 'https://www.trba.org',
    title: 'Texas Rabbit Breeders Association'
  },
  link4: { 
    displayName: 'Medi Rabbit',
    url: 'http://www.medirabbit.com/EN/index_en.htm',
    title: 'MediRabbit, great source for rabbit health'
  },
  link5: { 
    displayName: 'Rabbit Care Tips',
    url: 'https://www.rabbitcaretips.com/',
    title: 'Rabbit care tips'
  },
  link6: { 
    displayName: 'KW Cages',
    url: 'https://www.kwcages.com/',
    title: 'KW Cages'
  },
}

function About(props) {

  return(
    <>
    <Fade>
      <div className="spacer" />
      <div className="div-info stitching drop-shadow">
        <h3>{aboutText.header}</h3>
        <p>{aboutText.details01}</p>
        <p>{aboutText.details02}</p>
        <p>{aboutText.details03}</p>
        <p><strong>{aboutText.details04}</strong></p>
        {
          Object.keys(outBoundLinks).map(key => {
            return (
              <li key={key}>
                <a href={outBoundLinks[key].url} 
                  title={outBoundLinks[key].title}
                  target="_blank"
                  rel="noreferrer">
                    {outBoundLinks[key].displayName}
                </a>
              </li>
            );
          })
        }
      </div>
    </Fade>
    </>
  );
}

export default About;
