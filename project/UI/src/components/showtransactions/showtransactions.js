import React from 'react';
import Header from '../header/header';
import './showtransactions.css';

const ShowTransactions = () => {
    return (
        <div>
            <Header />
            <div className="transaction-details-container">
                <h2 className="transaction-details-heading">Transaction Details</h2>
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Issue Date</th>
                            <th>Due Date</th>
                            <th>Sent/Receive</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Zoho</td>
                            <td>2023-12-01</td>
                            <td>2023-12-15</td>
                            <td>Sent</td>
                            <td><button className="view-details-button">View Details</button></td>
                        </tr>
                        <tr>
                            <td>Lenovo</td>
                            <td>2023-12-01</td>
                            <td>2023-12-15</td>
                            <td>Receive</td>
                            <td><button className="view-details-button">View Details</button></td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>2023-12-01</td>
                            <td>2023-12-15</td>
                            <td>Sent</td>
                            <td><button className="view-details-button">View Details</button></td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowTransactions;
