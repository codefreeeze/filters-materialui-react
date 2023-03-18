import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
function SearchBar({ value, changeInput }) {
  return (
    <div className='navbar-header' >
      <Navbar expand="lg">

        <Container fluid style={{ padding: "0 40px" }}>
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
            <NavLink style={{ textDecoration: "none",color:"#737373" }} to="/">SSG
            </NavLink>
          </li>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "space-around" }}>
            <div >
              <SearchIcon className='searchBar-icon' />
              <input
                style={{ border: "none", outline: "none", backgroundColor: "f8f9fa" }}
                type='text'
                placeholder='Search ...'
                value={value}
                onChange={changeInput}
              />
            </div>
            <Nav
              className=""
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Cart</Nav.Link>
              <Nav.Link href="#action2">Login</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>
  );
}

export default SearchBar