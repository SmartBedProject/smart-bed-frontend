import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/creates">Create Notes</Link>
        </nav>
    );
}

export default Navbar;