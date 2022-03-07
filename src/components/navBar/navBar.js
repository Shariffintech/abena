import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import { Navbar, Button } from "react-bulma-components";

export default function NavBar() {
  return (
    <div className="navbar">

      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link>
                <Link to={`/`}>Home</Link>
              </Navbar.Link>

              <Navbar.Dropdown>
                <Navbar.Item href="#">
                  <Link to="/mission">Mission</Link>
                </Navbar.Item>

                <Navbar.Item href="#">Subitem 2</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>

            <Navbar.Item href="#">
              <Link to="/students">Students</Link>
            </Navbar.Item>

            <Navbar.Item href="#">
              <Link to="/intake">Intake</Link>
            </Navbar.Item>
          </Navbar.Container>

          <Navbar.Container position="end">
            <Navbar.Item href="#">
              <Link to="/strategies">Strategies</Link>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
}
