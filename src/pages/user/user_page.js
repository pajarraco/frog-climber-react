import { useParams } from 'react-router-dom';

function UserPage() {
  const { user } = useParams();

  return (
    <div className='container'>
      <h1>User Profile</h1>
      <p>This is your awesome User Profile for {user}</p>
    </div>
  );
}

export default UserPage;