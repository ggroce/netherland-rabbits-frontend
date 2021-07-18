import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';

function Sidebar(props) {
  return(
    <>
      <div className="sidebar drop-shadow">
        <div id="sidebar-desktop">
          <div className="flex_container flex_column flex_center">
            <div id="sidebar-logo-large">
              LaBelle 
              <br />
              Rabbitry
            </div>
            <Navbar history={props.history}/>
          </div>
        </div>

        <div id="sidebar-tablet">
          <div className="flex_container flex_column flex_center">
            <div id="sidebar-logo-small">
              LaBelle 
              <br />
              Rabbitry
            </div>
            <Navbar history={props.history}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
