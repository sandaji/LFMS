import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, } from "react-bootstrap";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const signoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="">
      <Navbar bg="dark" variant="dark" expand="lg" className='navbar__main' >
        <LinkContainer to="/">
          <Navbar.Brand className="mx-5">awesome Library</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            {userInfo ? (
              <>
                {userInfo.isAdmin && (
                  <>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  </>
                )}
                <Nav.Link href="/profile">Settings</Nav.Link>
                <Nav.Link variant="dark" to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Nav.Link>
              </>
            ) : (
              <Link className="nav-link" to="/login">
                Sign In
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
