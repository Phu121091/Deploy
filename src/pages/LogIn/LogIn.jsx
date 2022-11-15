import React from "react";
import './LogIn.css'
import logo from '../../components/Logo/logo-alt.png';
import {UserContext} from '../../components/Layout';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function LogIn() {
    
  const User = useContext(UserContext);
  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  const navigate = useNavigate();
  

  console.log(email ,pass);
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email:`${email}`,
      password:`${pass}`
    }
   User.change(user);
   console.log(User.username);
//    localStorage.setItem("currentUser", JSON.stringify(user))
   navigate("/UserInfor", { replace: true });
  }


    return ( 

        <div className="wrapper">

            <div className="log-in">
                <img className="logo" src={logo} alt="logo"></img>
    
                <form  className="form" id="form-1" onSubmit={(e)=>handleLogin(e)}>
                    <h3 className="heading">Welcome back</h3>
                    <p className="desc">
                        Please log into your account
                    </p>
    
                    <div className="spacer"></div>
    
                    <div className="form-group">
                        <label for="mail" className="form-label">Email</label>
                        <input id="mail" name="mail" type="text" placeholder="VD: NguyenA@gmail.com" className="form-control" onChange={(event) => setEmail(event.target.value)}/>
                        <span className="form-message"></span>
                    </div>
    
                    <div className="form-group">
                        <label for="password" className="form-label">Password</label>
                        <input id="password" name="password" type="password" placeholder="Password" className="form-control" onChange={(event) => setPass(event.target.value)}/>
                        <span className="form-message"></span>
                    </div>

                    <div className="form-report">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span className="slider-remem">Remember Me</span>
                        <a  className="forget-pass">Forget password?</a>
                    </div>
    
                    <button className="form-submit" >Login</button>

                    <span className="form-options"><hr className="log-hr"/>Or log in with<hr className="log-hr"/></span>

                    <div className="form-option-group">
                        <button className="form-option">Facebook</button>
                        <button className="form-option">Google</button>
                        <button className="form-option">Firebase</button>
                        <button className="form-option">Twiter</button>
                    </div>

                    <span className="form-regis">Don't Have An Account? <a >Registration</a></span>

                </form>
            </div>

            {/* <div>
                <img className="image" src={logo} alt="logo"></img>
            </div> */}
        </div>
    );
}

export default LogIn;