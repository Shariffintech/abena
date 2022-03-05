import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>Abena</h1>
      <nav>
        {/* <Link to={`/`}>Home</Link> */}
        <Link to="/students">Students</Link>
        <Link to="/strategies">Strategies</Link>
        <Link to="/mission">Mission</Link>
        <Link to="/">Intake</Link>
      </nav>
    </div>
  );
}
