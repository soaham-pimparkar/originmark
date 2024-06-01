import React from 'react'
import '../Styles/Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {  useNavigate } from "react-router-dom";
const Login = () => {


  const nevigate = useNavigate();
  const onSubmit = async (e) => {
   
   e.preventDefault();
    let data={
          email:e.target.email.value,
          password:e.target.password.value
    };
   
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      }
    };
   

    let status = 200;

    axios
      .post("/user/login", data , axiosConfig)
      .then((dat) => {
          console.log(dat)
        
      })
      .catch((err) => {
        
        status = err.response.status;
      });

    if (status === 200) {
      // dont know where to nevigate user after login 
      nevigate("/");
    } else {
      alert("register first");
      // check the router part 
      nevigate("/register");
    }
    e.target.reset();
  };


  return (
    <section id='login_section'>

      <div id='login_form'>
        <form action='' onSubmit={onSubmit}>
          <p id='form_title'>Sign In</p>
          <div className='inpts'>
            <input type="email" name='email' placeholder='email Id' />
          </div>
          <div className='inpts'>
            <input type="password" name='password' placeholder='password' />
          </div>
          <div className='inpts btn1'>
            <button>
              Sign In
            </button>
            <p id='signupop'>
              Don’t have an account?&nbsp;
              <Link to='/signup' className='sgnlink'>Sign Up</Link>
            </p>
          </div>
          {/* OR
          <div className='inpts btn2'>
            <button>
              <img src={gglimg} alt="" />
              Sign In with Google
            </button>
          </div> */}
        </form>
      </div>
      <div id='login_imgdiv'>
        <p>Welcome back to</p>
        <div>UnchainedIP</div>
      </div>
    </section>
  )
}

export default Login