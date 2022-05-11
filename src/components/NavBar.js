import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <>
      {/* <nav id="navigation">
        <NavLink className="logo" to="/">
          LOGO
        </NavLink>

        <NavLink className="nav" to="/">
          Blog
        </NavLink>

        <NavLink className="nav" to="./about">
          About
        </NavLink>
        <NavLink className="nav" to="/">
          All posts
        </NavLink>
      </nav> */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink className="logo" to="/">
              Lifestyle Blog
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className="nav" to="/">
                  Blog
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav" to="./about">
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
