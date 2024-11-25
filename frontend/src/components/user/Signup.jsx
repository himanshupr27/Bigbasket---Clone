import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import "./Login.css";
// import {useDispatch} from 'react-redux'
// import setCredentials from '../features/auth/authSlice'

const Signup = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  const[user,setUser]=useState({
    Username:"",
    email:"",
    phoneno:"",
    password:"",
    cnfpassword:"",
  })
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
     ...user,
     [name]:value,
    })
  };
  const handleSublit=async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch('https://bigbasket-clone.onrender.com/api/auth/signup',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
      console.log(response);
      if(response.ok){
        // const data=await response.json();
        // console.log(data);
         setUser({
          Username:"",
          email:"",
          phoneno:"",
          password:"",
          cnfpassword:"",
         })
         navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='signup login flexed'>
    <div className="signup_container login_container col-8 d-flex">
      <div className='signup signup-div login-form d-flex flex-column justify-content-center align-items-center'>
        <h1>SIGN<span>UP</span></h1>
        <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSublit}>
          <input type='text' placeholder='Full Name' name='Username' value={user.Username} onChange={handleInput}/>
          <input type='email' placeholder='Enter The email id' name='email' value={user.email} onChange={handleInput}/>
          <input type='text' placeholder='Phone No.' name='phoneno' value={user.phoneno} onChange={handleInput}/>
          <input type='password' placeholder='Password' name='password' value={user.password} onChange={handleInput}/>
          <input type='password' placeholder='Confirm Password' name='cnfpassword' value={user.cnfpassword} onChange={handleInput}/>
          <button type="submit">SignUp</button>
        </form>
        <p>Already have a account, <Link to='/login'><span>Login</span></Link></p>
      </div>
      <div className='signup login-image col-6'>
        <img src="/images/signup.jpg" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Signup
