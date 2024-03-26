// Adduser.js
import React from 'react';
import Header from '../header/header';
import './adduser.css'; // Import header styles

const Adduser = () => {
    return (
        <div>
            <Header />
            <div className="adduser-container">
                <div className="adduser-content">
                    <h2>Add User</h2>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" />
                    </div>
                    <button className="adduser-button">Add User</button>
                </div>
            </div>
        </div>
    );
};

export default Adduser;
