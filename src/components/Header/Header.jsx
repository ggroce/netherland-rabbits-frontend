import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

const outBoundLinks = {
  link1: {  
    displayName: 'Rabbit Pedia',
    url: 'https://rabbitpedia.com',
    title: 'Rabbit Pedia'
  },
  link2: {
    displayName: 'ARBA', 
    url: 'https://www.arba.org',
    title: 'American Rabbit Breeders Association'
  },
  link3: { 
    displayName: 'TRBA',
    url: 'https://www.trba.org',
    title: 'Texas Rabbit Breeders Association'
  },
}

function Header(props) {
  return(
    <header className="drop-shadow">
      <div className="header-nav-wrapper">
        <div className="header-desktop">
          <ul className="flex_container margin-zero">
            {
              Object.keys(outBoundLinks).map(key => {
                return (
                  <li>
                    <a href={outBoundLinks[key].url} 
                      title={outBoundLinks[key].title}
                      target="_blank"
                      rel="noreferrer">
                        {outBoundLinks[key].displayName}
                    </a>
                  </li>
                );
              })
            }
            <li className="push_right">
              <a href="https://www.facebook.com/La-Belle-Rabbitry-166542050861453" 
                title="La Belle Rabbitry on Facebook"
                target="_blank"
                rel="noreferrer">
                  LBR on Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="header-mobile">
            <ul className="flex_container margin-zero">
                <Navbar history={props.history}/>
            </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
