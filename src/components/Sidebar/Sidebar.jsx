import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItems from './SidebarItems';

const SidebarItem = styled.div`
padding: 2px 3px;
transition: all 0.25s ease-in-out;
background: ${props => props.active ? "#4A4737" : ""};
margin: 5px 20px;
border-radius: 4px;

p {
  margin: 0;
}

a {
  text-decoration: none;
  color: ${props => props.active ? "#F9F3DB" : "#000000"};
}

&:hover {
  cursor:pointer;
}

&:hover:not(:first-child) {
  background: #BADDDA;
  
  a {
    color: black;
  }
}
`;

function Sidebar(props, { defaultActive }) {
  const location = props.history.location;
  const lastActiveIndex = Number(localStorage.getItem("lastActiveIndex"));
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex  || defaultActive);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getRoutePath(path) {
    return (path.charAt(0) === '/') ? path : '/' + path;
  }

  function printSelections(page, index) {
    return(
      <SidebarItem key={page.name} active={index === activeIndex}>
        <Link to={page.route}>
          <p>{page.name}</p>
        </Link>
      </SidebarItem>
    );
  }

  useEffect(() => {
    const activePage = SidebarItems.findIndex(page => getRoutePath(page.route) === getRoutePath(location.pathname));
    changeActiveIndex(activePage);
  }, [location]);

  return(
    <>
      <div className="sidebar drop-shadow">
        <div id="sidebar-desktop">
          <div className="flex_container flex_column flex_center">
            <div id="sidebar-logo-large">
              Large logo.
            </div>

              {
              SidebarItems.map((page, index) => printSelections(page, index))
              }

          </div>
        </div>
        <div id="sidebar-tablet">
          <div className="flex_container flex_column flex_center">
            <div id="sidebar-logo-small">
              Small logo.
            </div>
            <div style={{fontSize: '.75em'}}>
            {
            SidebarItems.map((page, index) => printSelections(page, index))
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
