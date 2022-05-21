import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
//import logo from "../images/logo2.png";
import {UserContext} from "../App";


const Navbar = () => {

  const { state, dispatch } = useContext(UserContext);
  console.log(`the navbar user ${state} and ${dispatch}`);
    
    const RenderList = () => {
      
        if (state) {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/"> <span class="logoimg">Home</span> </NavLink>
                    </li>

                    
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/about"><span class="logoimg">Profile</span></NavLink>
                    </li> 

                    {/*
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/contact"><span class="logoimg">Contact</span></NavLink>
                    </li>*/}

                    
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/logout"><span class="logoimg">logout</span></NavLink>
                    </li>
                </>
                
            )
        } else {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/"><span class="logoimg">Home</span> </NavLink>
                    </li>

                    {/*
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/about"> about</NavLink>
                    </li>

                    
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/contact"><span class="logoimg">Contact</span></NavLink>
                    </li>
                    
*/}
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/login"><span class="logoimg">login</span></NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/signup"> <span class="logoimg">Register</span></NavLink>
                    </li>

                    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="logoimg"> Dropdown</span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

          
          <li className="nav-item">
                        <NavLink exact activeClassName="active-page" className="nav-link" to="/contact"><span class="logoimg1">Contact</span></NavLink>
                    </li>
            <li><a class="dropdown-item" href="#"><span class="logoimg1"> Admission  </span></a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#"> <span class="logoimg1"> Fee structure </span></a></li>
          </ul>
        </li>
                    
                  
                    
                </>
            )
        }
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                    <NavLink className="navbar-brand" to="#">
                      {/*  <img src={logo} alt="logo" /> */}
                      <h3> <span class="logoimg">Student  Management  System</span></h3>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="ml-auto navbar-nav">
              
                <RenderList />
      
              
            </ul>
            </div>
            </nav>
        </>
    )
}

export default Navbar
