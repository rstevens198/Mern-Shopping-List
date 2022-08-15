import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarBrand,
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <RegisterModal />
              </NavItem>
              <NavItem>
                <Logout />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
