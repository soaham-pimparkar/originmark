import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Register.css'
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
const Register = () => {

  const nevigate = useNavigate();
  
  const onSubmit = async (e) => {

   e.preventDefault();
    const data={
        name:e.target.name.value,
        email:e.target.email.value,
        phone:e.target.phone.value,
        password:e.target.password.value
    }
   
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      }
    };
   

    let status = 200;
    await axios
      .post("/user/register", data , axiosConfig)
      .then((dat) => {
       
      })
      .catch((err) => {
        status = err.response.status;
      });

    if (status === 200) {
      nevigate("/");
    } else {
      alert("Enter fields correctly")
      // alert("register first");
      // // TODO check the router part 
      // nevigate("/signup");
    }
    
  };

  // TODO : call the function in login button or submit button  



  return (
    <section id='reg_section'>
      <div id='reg_imgdiv'>
        <p>Get Started with</p>
        <div>UnchainedIP</div>
      </div>
      <div id='reg_form'>
        <form action='' onSubmit={onSubmit}>
          <p id='form_title'>Sign Up</p>
          <div className='inpts'>
            <input type="text" name='name' placeholder='Full name' />
          </div>
          <div className='inpts'>
            <input type="email" name='email' placeholder='email id' />
          </div>

          {/* <div className='multi1'>
            <div className='inpts'>
              <select name='nationallity'  >
                <option value="0">Nationality</option>
                <option value="1">Indian</option>
                <option value="2">American</option>
                <option value="3">British</option>
              </select>
            </div>
            <div className='inpts'>
              <select name='gender'  >
                <option value="0">Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
          </div> */}


          <div className='multi2'>
            <div className='inpts inp1'>
              <select name='ccode' id='s1' >
                <option value="0">+91</option>
              </select>
            </div>
            <div className='inpts inp2'>
              <input name='phone' id='s2' placeholder='phone number' />
            </div>
          </div>

          {/* <div className='inpts'>
            <select name='usefor' placeholder='password' >
              <option value="1">I seek to use the platform primarily for</option>
              <option value="2">For 1</option>
              <option value="3">For 2</option>
              <option value="4">For 3</option>
            </select>
          </div> */}
          <div className='inpts'>
            <input type="password" name='password' placeholder='password' />
          </div>
          <div className='tandcchk'>
            <input type="checkbox" name='tandcagree' />
            I agree to the Terms and Privacy Policy
          </div>

          <div className='inpts btn1'>
            <button>
              Sign Up
            </button>
            <p id='signupop'>
              Already have an account?&nbsp;
              <Link to='/login' className='sgnlink'>Sign In</Link>
            </p>
          </div>

          {/* <div className='inpts btn2'>
            <button>
              <img src={gglimg} alt="" />
              Sign In with Google
            </button>
          </div> */}
        </form>
      </div>

    </section>
  )
}

export default Register