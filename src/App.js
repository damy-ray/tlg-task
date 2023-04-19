import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContentFeed from './pages/ContentFeed';
import Registration from './pages/Registration';
import ContactMe from './pages/ContactMe';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/feed" exact element={
          <ProtectedRoute>
            <ContentFeed />
          </ProtectedRoute>
        } />
        <Route path="/register" exact element={<Registration />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/contact" element={
          <ProtectedRoute>
            <ContactMe />
          </ProtectedRoute>} />
      </Routes>
    </Router >
  );
}





export default App;

