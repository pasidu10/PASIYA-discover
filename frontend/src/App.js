import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import LessonsList from './components/Lessons/LessonsList';
import LessonPlayer from './components/Lessons/LessonPlayer';
import AdminDashboard from './components/Admin/AdminDashboard';

export default function App(){
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/lessons" element={<LessonsList/>} />
          <Route path="/lessons/:id" element={<LessonPlayer/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  }
