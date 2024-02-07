import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav class="global">
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;
