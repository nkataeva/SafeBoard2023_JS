import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Главная
          </NavLink>
          <NavLink to="/users" activeStyle>
            Пользователи
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;