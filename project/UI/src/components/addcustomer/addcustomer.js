// AddCustomer.js
import React from 'react';
import Header from '../header/header';
import './addcustomer.css';

const AddCustomer= () => {
    return (
        <div>
            <Header />
            <div className="addcustomer-container">
                <div className="addcustomer-content">
                    <h2>Add Customer</h2>
                    <div className="input-group">
                        <label htmlFor="company">Company:</label>
                        <input type="text" id="company" name="company" />
                        <label htmlFor="domain">Domain:</label>
                        <input type="text" id="domain" name="domain" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="company">EmailId:</label>
                        <input type="text" id="company" name="company" />
                        <label htmlFor="domain">Supplier Name:</label>
                        <input type="text" id="domain" name="domain" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="company">Phone:</label>
                        <input type="text" id="company" name="company" />
                        <label htmlFor="domain">Location:</label>
                        <input type="text" id="domain" name="domain" />
                    </div>
                    <button className="addcustomer-button">Add Customer</button>
                </div>
            </div>
        </div>

    );

};

export default AddCustomer;