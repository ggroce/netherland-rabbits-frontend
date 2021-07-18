import React from 'react';
import './Footer.css';

const copyRightText = 
`Copyright 2021 La Belle Rabbitry.`;

function Footer(props) {
  return(
    <footer>
      <nav className="flex_container flex_column flex_center">
        {copyRightText}
      </nav>
    </footer>
  );
}

export default Footer;
