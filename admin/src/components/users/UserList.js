import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import Button from '../common/Button';
import Modal from '../common/Modal';
import UserForm from './UserForm';
import '../../Assets/css/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Mock data - replace with API call
    const mockUsers = [
      { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
      { id: 2, name: 'John Doe', email: 'john@example.com', role: 'user' },
      { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    ];
    setUsers(mockUsers);
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSubmit = (userData) => {
    if (selectedUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === selectedUser.id ? { ...user, ...userData } : user
      ));
    } else {
      // Add new user
      const newUser = {
        id: Math.max(...users.map(u => u.id), 0) + 1,
        ...userData
      };
      setUsers([...users, newUser]);
    }
    setShowModal(false);
    setSelectedUser(null);
  };

  const headers = ['Name', 'Email', 'Role', 'Actions'];

  const renderRow = (user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <span className={`role-badge ${user.role}`}>
          {user.role}
        </span>
      </td>
      <td>
        <Button variant="primary" size="small" onClick={() => handleEdit(user)}>
          Edit
        </Button>
        <Button variant="danger" size="small" onClick={() => handleDelete(user.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );

  return (
    <div className="user-list">
      <div className="user-list-header">
        <h2>Users</h2>
        <Button variant="primary" onClick={() => {
          setSelectedUser(null);
          setShowModal(true);
        }}>
          Add User
        </Button>
      </div>
      <Table headers={headers} data={users} renderRow={renderRow} />
      
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <UserForm 
          user={selectedUser} 
          onSubmit={handleSubmit} 
          onCancel={() => setShowModal(false)} 
        />
      </Modal>
    </div>
  );
};

export default UserList;