import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import "./style.scss"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" >
    <Route index  element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
  );
}
export default App;
