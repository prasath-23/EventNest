import React, { useState } from 'react';
import Navbar from '../NavBar/Navbar';
import styles from '../../style';

const ProfilePage = () => {
  // Sample initial user data
  const initialUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    password: '',
  };

  // State to manage user data
  const [userData, setUserData] = useState(initialUserData);
  // State to manage edit mode
  const [editMode, setEditMode] = useState(false);
  // State to manage password input
  const [password, setPassword] = useState('');
  // State to manage error message
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for updating user data
  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handler for updating password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handler for submitting updated user data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any necessary actions like sending data to a server
    if (password === 'password123') {
      console.log('Updated user data:', userData);
      // For simplicity, let's reset the form after submission
      // You might want to handle this differently in your actual application
      setEditMode(false);
      setPassword("") ;
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
    }
  };

  return (
    
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
    </div>
    
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile Page</h1>
        <div>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={userData.name}
                  onChange={handleUserDataChange}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleUserDataChange}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bio" className="block font-bold mb-1">Bio:</label>
                <textarea
                  name="bio"
                  id="bio"
                  value={userData.bio}
                  onChange={handleUserDataChange}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                  rows={4}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-bold mb-1">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg w-full">Save</button>
            </form>
          ) : (
            <div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Name:</label>
                <div className="px-3 py-2 border rounded-lg text-sm">{userData.name}</div>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Email:</label>
                <div className="px-3 py-2 border rounded-lg text-sm">{userData.email}</div>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Bio:</label>
                <div className="px-3 py-2 border rounded-lg text-sm">{userData.bio}</div>
              </div>
            </div>
          )}
          <div className="mt-4">
            {!editMode && (
              <button onClick={() => setEditMode(true)} className="bg-black text-white px-4 py-2 rounded-lg w-full">Edit</button>
            )}
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default ProfilePage;
