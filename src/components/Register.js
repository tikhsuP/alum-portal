import React, { Component } from 'react'
import './css/login.css';
import avatar from './Images/avatar.svg';
import img from './Images/img.svg';
import wave from './Images/wave.png';
import logo from './Images/logos/logo.png';

export default class Register extends Component {
    render() {
        return (
            <>
                 <img className="wave" src={wave} alt="Wave" />
   <div className="container">
          <div className="img">
          <img className="Image" src={img} alt="Personalization" />
          </div>
          <div className="login-content">
                <form action="index.html">
                <img  src={logo} alt="Avatar" />
                  <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                          <div className="i">
                              <i className="fas fa-user"></i>
                          </div>
                          <div className="div">
                              <h5></h5>
                              <input type="text" className="input" placeholder="Username" />
                          </div>
                        </div>
                        <div className="input-div pass">
                          <div className="i"> 
                              <i className="fas fa-lock"></i>
                          </div>
                          <div className="div">
                              <h5></h5>
                              <input type="password" className="input" placeholder="Password" />
                          </div>
                        </div>
                        <a href="index.html">Forgot Password?</a>
                        <br></br>
                        <input type="submit" className="btn" value="Sign Up" />
                        <input type="submit" className="btn" value="Login" />

                </form>
          </div>
    </div>
    </>
        )
    }
}

