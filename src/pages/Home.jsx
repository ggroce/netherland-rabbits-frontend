import React from 'react';
import { useSelector } from 'react-redux';
import Splash from '../components/Splash/Splash';
import CardList from '../components/CardList/CardList';

const pageText = {
  welcomeHeader: 
  `Welcome to La Belle Rabbitry!`, 
  introText: 
  `We are a Texas Gulf Coast based rabbitry, focused in the breeding and competitive 
  showing of Netherland Dwarf rabbits. La Belle Rabbitry currently has many award 
  winning rabbits on hand, including many Grand Champions and rabbits with multiple 
  legs. The shipping of rabbits will be considered on a case by case basis, with 
  factors such as distance and experience of the buyer taken into account. Please 
  click on the cards below to explore and learn more about our rabbits.`
}

function Home(props) {
  const { isPending, inventory, err } = useSelector((state) => state.requestInventory);
  
  const handleLinkClick = () => {
    document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
  };

  return(
    <>
      <div id="top" className="flex_container flex_column flex_center">
        <div onClick={handleLinkClick}>
          <Splash />
        </div>
        <div id="intro" className="spacer" />
        <div  className="div-info stitching drop-shadow">
          <div style={{textAlign: 'center', fontWeight: 'bold', marginTop: '.5em'}}>
            {pageText.welcomeHeader}
          </div> 
          <div style={{textIndent: '1em', marginTop: '.5em'}}>
            {pageText.introText}  
          </div>
        </div>
        <div id="rabbitList" className="spacer"/>
        <div className="flex_container flex_row flex_center">
          {
            isPending ? 
            <h2>Loading list of Rabbits!</h2> :
            <CardList inventory={inventory} />
          }
        </div>
      </div>
      <div className="spacer" />
      <div className="spacer" />
    </>
  );
}

export default Home;
