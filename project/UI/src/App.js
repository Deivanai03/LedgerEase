// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Adduser from './components/adduser/adduser';
import Header from './components/header/header';
import AddCustomer from './components/addcustomer/addcustomer';
import FileUpload from './components/fileupload/fileupload';
import ShowTransactions from './components/showtransactions/showtransactions';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/header" element={<Header />} />
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/showtransactions" element={<ShowTransactions/>} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
