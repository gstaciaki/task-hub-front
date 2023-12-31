import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import TaskList from './pages/TaskList/TaskList';
import Users from './pages/Users/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
