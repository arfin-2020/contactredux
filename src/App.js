import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navbar/NavBar';
import Create from './components/pages/Create';
import Home from './components/pages/Home';
import Update from './components/pages/Update';


const App = () => {
  return (
    <Router>
     <NavBar />
      <ToastContainer />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </Router>
  );
}

export default App;
