import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Survivor Bracket</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/predictions/">My Prediction</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cast_profiles">Cast Profiles</NavLink>
              </NavItem>
              <button id="logoutButton">Logout</button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}