import React from 'react';
import Card from './Card';
import './CardList.css';
import { Link } from "react-tiger-transition";

const CardList = ({ inventory }) => {
  return(
  <div>
    <nav>
      <Link to="/" transition='default-fade'>
        <h3>Back to home page</h3>
      </Link>
      <br></br>
    </nav>
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
