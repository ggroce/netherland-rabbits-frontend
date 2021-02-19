import React from 'react';
import { useSelector } from 'react-redux';
import CardList from '../components/CardList';

function About(props) {
  const { isPending, inventory, err } = useSelector((state) => state.requestInventory);

  return(
    <>
      <CardList inventory={inventory} />
    </>
  );
}

export default About;
