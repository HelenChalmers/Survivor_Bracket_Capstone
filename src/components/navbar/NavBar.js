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
  import './Navbar.css'



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

  handleLogout = (e) => {

    sessionStorage.removeItem(
      "credentials");
  }


  render() {
    return (
      <div id="navbarWrapper">
        <Navbar color="#f6df93" light expand="md" id="navbar">
          <NavbarBrand href="/" id="navbarbrand">Survivor Bracket</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/predictions" className="navbarHeader">My Prediction</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.cbs.com/shows/survivor/cast/" target="_blank" className="navbarHeader">Cast Profiles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  onClick={this.handleLogout} href="/login" className="navbarHeader">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}