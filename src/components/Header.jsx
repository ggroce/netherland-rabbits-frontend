import React from 'react';
import styled from 'styled-components';

function Header(props) {
  return(
    <header className="drop-shadow">
      <div className="header-nav-wrapper">
        <div className="header-desktop">
          <ul className="flex_container margin-zero">
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li className="push_right">Link4</li>
          </ul>
        </div>
        <div className="header-mobile">
          <ul className="flex_container margin-zero">
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
