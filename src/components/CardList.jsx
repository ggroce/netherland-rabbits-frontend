import React from 'react';
import Card from './Card/Card';

const CardList = ({ inventory }) => {
  return(
    <div className="flex_container flex_row flex_center">
    {
      inventory.map(rabbit => {
        return (
          <Card 
          key={rabbit.name}
          name={rabbit.name}
          type={rabbit.type}
          DOB={rabbit.DOB}
          awards={rabbit.awards}
          status={rabbit.status}
          sex={rabbit.sex}
          />
        );
      })
    }
  </div>
  );
}

export default CardList;
