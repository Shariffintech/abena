import React from "react";
import { Link } from "react-router-dom";
import "../../bulma.css";
import "../../App.css";
import { Navbar, Image } from "react-bulma-components";
import StrategyModal from "../modals/strategyModal";

// on click scroll to mission div 

// on click scroll to team div
// on click scroll to why div

const NavBar = () => {
  return (
    <div className="navbar is-fixed-top is-transparent ">      
        <Navbar.Brand>
          <Navbar.Item className="homepage" href="#" to="/home">
                  <Image
                    src="https://user-images.githubusercontent.com/22308837/157813235-24e05afb-589d-4452-a858-f1fca1e782c7.png"
                    alt="Strengthing early childhood education classrooms."
                  />
          </Navbar.Item>
        </Navbar.Brand>

        <Navbar.Menu alignContent="right" >
          <Navbar.Container>
            <Navbar.Item hoverable href="#">
              <Navbar.Link  href="#">
                <Link to={`/home`}>Home</Link>
              </Navbar.Link>

              <Navbar.Dropdown >
                <Navbar.Item href="#" onClick={() => scrollToElement("#mission-container")}>
                  <Link to="/mission" >Mission</Link>
                </Navbar.Item>

                <Navbar.Item href="#" onClick={() => scrollToElement("#team")}>
                  <Link to="/team">Team</Link>
                </Navbar.Item>

                <Navbar.Item href="#" onClick={() => scrollToElement("#why-abena")}>
                  <Link to="/whyabena">Why Abena?</Link>
                </Navbar.Item>

              </Navbar.Dropdown>
            </Navbar.Item>

            <Navbar.Item href="#">
              <Link to="/students">My Classroom</Link>
            </Navbar.Item>

            <Navbar.Container position="end">
              <Navbar.Item href="#">
                <Link to="/strategies">Strategy Portal</Link>
              </Navbar.Item>

              <Navbar.Item href="#">
                <Link to="/intake">Create Intake</Link>
              </Navbar.Item>

              <Navbar.Item href="#">
                <Link to="/strategies"><StrategyModal /></Link>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Container>
        </Navbar.Menu>
    </div>
  );
};

export default NavBar;
