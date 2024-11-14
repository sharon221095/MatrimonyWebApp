import React from 'react';
import { BrowserRouter as Router, Routes, Route, useHistory, Navigate } from "react-router-dom";
import { useState } from "react";
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/About Us/About';
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import EditProfile from './Components/EditProfile/EditProfile'
import Profile from './Components/Profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
