import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const signoutHandler = () => {
    dispatch(logout())
  }


  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container className='d-flex align-items-center justify-content-between'>
        <LinkContainer to='/'>
          <Navbar.Brand>awesome Library</Navbar.Brand>
        </LinkContainer>  
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='justify-content-end'>
            
            {userInfo ? (
              <>
              <Nav.Link >chat</Nav.Link>
                    <NavDropdown title="menu" id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Chat</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown></>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Sign In
                    </Link>
                  )}
           
            {userInfo && userInfo.isAdmin && (
    <NavDropdown title={userInfo.name} id="admin-nav-dropdown">
    <LinkContainer to="/admin/dashboard">
      <NavDropdown.Item>Dashboard</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to="/admin/products">
      <NavDropdown.Item>Products</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to="/admin/orders">
      <NavDropdown.Item>Orders</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to="/admin/users">
      <NavDropdown.Item>Users</NavDropdown.Item>
    </LinkContainer>
  </NavDropdown>
)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header