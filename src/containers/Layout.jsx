import React from "react";
import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Layout(props) {
  return (
    <div id="parent">
      <Header history={props.history} />
      <Sidebar history={props.history} />
      <main>
        <div className="header-hidden-spacer" />
        <div className="scroll-wrapper">
          <div>{props.children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
