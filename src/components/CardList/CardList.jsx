import React from 'react';
import Card from '../Card/Card.jsx';
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import './CardList.css';

const CardList = ({ inventory }) => {

  const getRandNum = () => {
    return Math.floor((Math.random() * 250) + 1);
  }

  return(
    <div className="flex_container flex_row flex_center">
    {
      inventory.map(rabbit => {
        return (
          <Tilt key={rabbit.name} className="tilt-wrapper"tiltMaxAngleX={6} scale={1.06}>
            <Fade bottom delay={getRandNum()}>
              <Card 
              rabbitry={rabbit.rabbitry}
              rabbitName={rabbit.name}
              rabbitType={rabbit.type}
              rabbitDOB={rabbit.DOB}
              rabbitAwards={rabbit.awards}
              rabbitStatus={rabbit.status}
              rabbitSex={rabbit.sex}
              rabbitDetails={rabbit.details}
              />
            </Fade>
          </Tilt>
        );
      })
    }
  </div>
  );
}

export default CardList;
