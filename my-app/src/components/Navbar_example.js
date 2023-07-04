import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// let name="asd"
export default function Navbar_example(props) {
  return (
    <>
      {/* // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>contact</li>
    // </nav>
    // <div className="container">
    //   <h1>hello {name}</h1>
    //  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    //  </div> */}
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" data-toggle="dro  pdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}

      <Navbar style={{ paddingLeft: "20px" }} bg="light" expand="lg">
        {/* <Container> */}
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>{props.aboutText}</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Components" id="basic-nav-dropdown">
            <LinkContainer to="/hooks">
              <NavDropdown.Item>Hooks</NavDropdown.Item>
            </LinkContainer>
           
            <LinkContainer to="/textform">
              <NavDropdown.Item>Text Form</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/updating">
              <NavDropdown.Item>Updating</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/unmounting">
              <NavDropdown.Item>unmounting</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/lists">
              <NavDropdown.Item>Lists</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/cond">
              <NavDropdown.Item>Conditional Rendering</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/images">
              <NavDropdown.Item>Images</NavDropdown.Item>
            </LinkContainer>
                        
            <LinkContainer to="/formex">
              <NavDropdown.Item>Form</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/handlingform">
              <NavDropdown.Item>Handling Form</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/mulinputs">
              <NavDropdown.Item>Multiple Inputs</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/uncform">
              <NavDropdown.Item>Uncontrolled Form</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/callbacks">
              <NavDropdown.Item>Callbacks</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/liftingstate">
              <NavDropdown.Item>Lifting State</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/context">
              <NavDropdown.Item>Context APi</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/hoc">
              <NavDropdown.Item>Higher Order Component</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/errorbound">
              <NavDropdown.Item>Error Bound</NavDropdown.Item>
            </LinkContainer>
              
            <LinkContainer to="/digitalClock">
              <NavDropdown.Item>Digital Clock</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/example">
              <NavDropdown.Item>Example</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/forms">
              <NavDropdown.Item>Forms</NavDropdown.Item>
            </LinkContainer>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

Navbar_example.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar_example.defaultProps = {
  title: "My App",
  aboutText: "About text here",
};
