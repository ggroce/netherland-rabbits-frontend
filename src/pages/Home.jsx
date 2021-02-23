import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Splash from '../components/Splash/Splash';
import CardList from '../components/CardList';

function Home(props) {
  const { isPending, inventory, err } = useSelector((state) => state.requestInventory);
  
  const handleLinkClick = () => {
    document.getElementById("seeInventory").scrollIntoView({ behavior: "smooth" });
  };

  return(
    <>
      <div className="flex_container flex_column flex_center">
        <div onClick={handleLinkClick}>
          <Splash />
        </div>
        <div id="seeInventory" className="spacer"/>
        <div className="flex_container flex_row flex_center">
          <CardList inventory={inventory} />
        </div>
      </div>
      <div className="spacer" />
    </>
  );
}

export default Home;
