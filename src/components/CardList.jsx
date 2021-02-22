import React from 'react';
import Card from './Card/Card';
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import './CardList.css';

const CardList = ({ inventory }) => {

  const getRandNum = () => {
    return Math.floor((Math.random() * 500) + 1);
  }

  return(
    <div className="flex_container flex_row flex_center">
    {
      inventory.map(rabbit => {
        return (
          <Tilt className="tilt-wrapper"tiltMaxAngleX={6} scale={1.06}>
            <Fade bottom delay={getRandNum()}>
              <Card 
              key={rabbit.name}
              name={rabbit.name}
              type={rabbit.type}
              DOB={rabbit.DOB}
              awards={rabbit.awards}
              status={rabbit.status}
              sex={rabbit.sex}
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
