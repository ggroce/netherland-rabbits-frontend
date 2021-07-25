import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarItems from "./NavbarItems.jsx";

const NavbarItem = styled.div`
  padding: 2px 3px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? "#4A4737" : "")};
  margin: 5px 20px;
  border-radius: 4px;

  a {
    text-decoration: none;
    color: ${(props) => (props.active ? "#F9F3DB" : "#000000")};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: #baddda;

    a {
      color: black;
    }
  }
`;

function Navbar(props, { defaultActive }) {
  const location = props.history.location;
  const lastActiveIndex = Number(localStorage.getItem("lastActiveIndex"));
  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex || defaultActive
  );

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getRoutePath(path) {
    return path.charAt(0) === "/" ? path : "/" + path;
  }

  function printSelections(page, index) {
    return (
      <NavbarItem key={page.name} active={index === activeIndex}>
        <Link to={page.route}>{page.name}</Link>
      </NavbarItem>
    );
  }

  useEffect(() => {
    const activePage = NavbarItems.findIndex(
      (page) => getRoutePath(page.route) === getRoutePath(location.pathname)
    );
    changeActiveIndex(activePage);
  }, [location]);

  return <>{NavbarItems.map((page, index) => printSelections(page, index))}</>;
}

export default Navbar;
