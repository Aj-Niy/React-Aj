import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <Link to="/" style={{margin: "10px"}}>Home</Link>
        <Link to="/about" style={{margin: "10px"}}>About</Link>
        <Link to="/contact" style={{margin: "10px"}}>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar
