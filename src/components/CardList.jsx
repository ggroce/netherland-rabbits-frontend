import React from 'react';
import Card from './Card/Card';
import Tilt from 'react-parallax-tilt';
import './CardList.css';

const CardList = ({ inventory }) => {
  return(
    <div className="flex_container flex_row flex_center">
    {
      inventory.map(rabbit => {
        return (
          <Tilt className="tilt-wrapper"tiltMaxAngleX={6} scale={1.06}>
            <Card 
            key={rabbit.name}
            name={rabbit.name}
            type={rabbit.type}
            DOB={rabbit.DOB}
            awards={rabbit.awards}
            status={rabbit.status}
            sex={rabbit.sex}
            />
          </Tilt>
        );
      })
    }
  </div>
  );
}

export default CardList;
