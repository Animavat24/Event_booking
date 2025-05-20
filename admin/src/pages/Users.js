import React from 'react';
import UserList from '../components/users/UserList';
import '../Assets/css/Users.css';

const Users = () => {
  return (
    <div className="users-page">
      <UserList />
    </div>
  );
};

export default Users;