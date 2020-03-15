import React, { Component } from 'react';
import '../App.css';
import avatar from './Images/avatar.svg';
import img from './Images/img.svg';
import wave from './Images/wave.png';

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  render() {
  return (<>
   <img className="wave" src={wave} alt="Wave" />
   <div className="container">
          <div className="img">
          <img className="Image" src={img} alt="Personalization" />
          </div>
          <div className="login-content">
                <form action="index.html">
                <img  src={avatar} alt="Avatar" />
                  <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                          <div className="i">
                              <i className="fas fa-user"></i>
                          </div>
                          <div className="div">
                              <h5>Username</h5>
                              <input type="text" className="input" />
                          </div>
                        </div>
                        <div className="input-div pass">
                          <div className="i"> 
                              <i className="fas fa-lock"></i>
                          </div>
                          <div className="div">
                              <h5>Password</h5>
                              <input type="password" className="input" />
                          </div>
                        </div>
                        <a href="index.html">Forgot Password?</a>
                        <br></br>
                      
                        <input type="submit" className="btn" value="Login" />
                </form>
          </div>
    </div>
    </>
  );
 }
}

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

export default Login;
