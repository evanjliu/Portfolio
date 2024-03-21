import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav class="global">
        {/* Add links to Home */}
        <Link to="/portfolio">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;
