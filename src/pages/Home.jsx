import React from 'react';
import Splash from '../components/Splash/Splash';
import styled from 'styled-components';

function Home(props) {
  return(
    <>
      <div className="flex_container flex_column flex_center">
        <Splash />
        <div className="child_container">
        <p>child div container 1</p>
      </div>
      <div className="child_container">
        <p>child div container 2</p>
      </div>
      <div className="child_container">
        <p>child div container 3</p>
      </div>
      <div className="child_container">
        <p>child div container 4</p>
      </div>
      <div className="child_container">
        <p>child div container 1</p>
      </div>
      <div className="child_container">
        <p>child div container 2</p>
      </div>
      </div>
    </>
  );
}

export default Home;
