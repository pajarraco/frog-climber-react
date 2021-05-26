import { Link } from 'react-router-dom';

import './nav.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/user'>User Profile</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;