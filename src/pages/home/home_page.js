import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='container'>
      <h1>Home</h1>
      <p>This is your awesome HomePage
        <br /><Link to='/ernesto'>User Ernesto</Link>
      </p>
    </div>
  );
}

export default HomePage;