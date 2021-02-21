import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

function Layout(props) {
  return(
    <div id="parent">
      <Header />
      <Sidebar history={props.history}/>
      <main>
      <div className="header-hidden-spacer" />
      <div className="scroll-wrapper">
        <div>
          {props.children}
        </div>
          <Footer />
      </div>
      </main>
    </div>
  )
}

export default Layout;
