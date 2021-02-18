import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer';

const SelectedPageParent = styled.div`
  background: #B5CCB8;
  margin-left: 175px;
  margin-top: 50px;
  flex: 1;
`;

function Layout(props) {
  return(
    <div id="parent">
      <Header />
      <Sidebar history={props.history}/>
      <main>
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
