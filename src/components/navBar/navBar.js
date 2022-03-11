import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import { Navbar} from "react-bulma-components";

 const NavBar = () => {
  return (
    <div className="navbar is-fixed-top ">
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="https://user-images.githubusercontent.com/22308837/157111938-79d1b507-3d6a-4e13-8039-c6f390c0cddf.jpg"
              alt="Strengthing early childhood education classrooms."
              width="100"
              height="100"
              onClick={<Link to="/home" />}
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link>
                <Link to={`/home`}>Home</Link>
              </Navbar.Link>

              <Navbar.Dropdown>
                <Navbar.Item href="#">
                  <Link to="/mission">Mission</Link>
                </Navbar.Item>

                <Navbar.Item href="#">
                  <Link to="/team">Team</Link>
                </Navbar.Item>

                <Navbar.Item href="#">
                  <Link to="/why">Why Abena?</Link>
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>


            <Navbar.Item href="#">
              <Link to="/students">Student Portal</Link>
            </Navbar.Item>

          <Navbar.Container position="end">
            <Navbar.Item href="#">
              <Link to="/strategies">Strategy Portal</Link>
            </Navbar.Item>

            <Navbar.Item href="#">
              <Link to="/intake/new">Create Intake</Link>
            </Navbar.Item>
          </Navbar.Container>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </div>
  );
}

export default NavBar;