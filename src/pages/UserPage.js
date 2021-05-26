import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  let { user } = useParams();

  return (
    <div className='container'>
      <h1>Hello there user {user}</h1>
      <p>This is your awesome User Profile page</p>
    </div>
  );
}

export default UserPage;