import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav>
              <Link to=''>Home</Link>
              <Link to=''>Course</Link>
              <Link to=''>Pricing</Link>
              <Link to=''>Contact</Link>
          </nav>
     );
};

export default Header;