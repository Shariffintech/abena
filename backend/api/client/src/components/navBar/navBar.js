import React, { useState, useEffect, useRef, useStyles } from "react";
import { Link } from "react-router-dom";
import "../../bulma.css";
import "../../App.css";
import { Navbar, Image, Section, Button } from "react-bulma-components";
import StrategyModal from "../modals/strategyModal";

function scrollToElement(element) {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

export default function NavBar() {
  const [navBackground, setBackground] = useState("appBarTransparent");
  const navRef = useRef(null);
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  return (
    <div className="navbar is-fixed-top is-transparent ">
      <Navbar aria-label="main navigation">
        <Image
          className="abena-logo"
          src="https://user-images.githubusercontent.com/22308837/157813235-24e05afb-589d-4452-a858-f1fca1e782c7.png"
          alt="Strengthing early childhood education classrooms."
          size="small"
        />

        <Section position="start" tabs>
          <Navbar.Menu alignContent="right">
            <Navbar.Container>
              <Navbar.Item hoverable href="#">
                <Navbar.Item href="#">
                  <Link to="/">
                    <strong>Home</strong>
                  </Link>
                </Navbar.Item>
                {/* 
                <Navbar.Dropdown>
                  <Navbar.Item
                    href="#"
                    onClick={() => scrollToElement("#mission-container")}
                  >
                    <Link to="/mission">Mission</Link>
                  </Navbar.Item>

                  <Navbar.Item
                    href="#"
                    onClick={() => scrollToElement("#team")}
                  >
                    <Link to="/team">Team</Link>
                  </Navbar.Item>

                  <Navbar.Item
                    href="#"
                    onClick={() => scrollToElement("#why-abena")}
                  >
                    <Link to="/whyabena">Why Abena?</Link>
                  </Navbar.Item>
                </Navbar.Dropdown> */}
              </Navbar.Item>

              {/* <Navbar.Item href="#">
                <Link to="/students">My Classroom</Link>
              </Navbar.Item> */}

              <Navbar.Container position="end">
                {/* <Navbar.Item href="#">
                  <Link to="/strategies">Strategy Portal</Link>
                </Navbar.Item> */}
                {/* 
                <Navbar.Item href="#">
                  <Link to="/blog"><strong>Blog</strong></Link>
                </Navbar.Item> */}

                {/* <Navbar.Item href="#">
                  <Link to="/intake">Create Intake</Link>
                </Navbar.Item> */}

                {/* <Navbar.Item href="#">
                  <Link to="/teacherqna">Teacher Q&A</Link>
                </Navbar.Item> */}

                {/* <Navbar.Item href="#">
                  <Link to="/strategies">
                    <StrategyModal />
                  </Link>
                </Navbar.Item> */}

                {/* <Button.Group navbar>
                  <Button color="primary">
                    <strong>Sign Up</strong>
                  </Button>
                  <Button color="light">Log in</Button>
                </Button.Group> */}
              </Navbar.Container>
            </Navbar.Container>
          </Navbar.Menu>
        </Section>
      </Navbar>
    </div>
  );
}
