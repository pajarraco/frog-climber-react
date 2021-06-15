import { Link } from 'react-router-dom';

import './nav.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users/ernesto'>User Profile</Link></li>
        <li><Link to='/follow'>Follow Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;