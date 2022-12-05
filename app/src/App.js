import "./Components/layout.module.css";
import { Routes, Route } from 'react-router-dom';
import { ReportLostItems, SearchFoundItems, Home, ReportFoundItems } from './pages';
import { NavbarAdmin, NavbarUser, Footer, LoginForm } from "./Components";
import React, {useState} from 'react';


function App() {
  const adminUser = {
    email: "admin@nmsu.edu",
    password: "admin123"
  }
  const normalUser = {
    email: "user@nmsu.edu",
    password: "user123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if((details.email == adminUser.email && details.password == adminUser.password) || (details.email == normalUser.email && details.password == normalUser.password)){
      console.log("logged in");
      setUser({
        email: details.email
      })
    }
    else{
      console.log("details do not match");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({email:""});
  }

  return (
    <>
    {(user.email === "admin@nmsu.edu") ? (
      <><NavbarAdmin />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report-lost-items' element={<ReportLostItems />} />
        <Route path='/search-found-items' element={<SearchFoundItems />} />
        <Route path='/admin-reporting' element={<ReportFoundItems />} />
      </Routes>
    
    <Footer/></>
    ) :
    (user.email === "user@nmsu.edu") ? (
      <><NavbarUser />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report-lost-items' element={<ReportLostItems />} />
        <Route path='/search-found-items' element={<SearchFoundItems />} />
      </Routes>
    
    <Footer/></>
    ) : (
        <LoginForm Login={Login}  error={error}/>
    )}
    </>
  


  );
}

export default App;