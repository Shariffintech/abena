import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="navbar">
            <Link to={`/`}>Home</Link>
            <Link to={`/students`}>Students</Link>
            <Link to={`/strategies`}>Strategies</Link>

        </div>
    )
}

export default NavBar;