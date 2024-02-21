import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav>
              <Link to='/'>Home</Link>
              <Link to='courses'>Courses</Link>
              <Link to='pricing'>Pricing</Link>
              <Link to='contact'>Contact</Link>
          </nav>
     );
};

export default Header;