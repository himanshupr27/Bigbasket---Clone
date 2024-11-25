import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {setCredentials} from '../../features/auth/authSlice';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[user,setUser]=useState({
    email:"",
    password:"",
  });
  function handelInput(e){
    let name=e.target.name;
    let value=e.target.value;
    setUser({
     ...user,
     [name]:value,
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch('https://bigbasket-clone.onrender.com/api/auth/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
      if(response.ok){
        const data=await response.json();
        console.log(data);
        const user={
          id:data.user_id,
          token:data.token};
        dispatch(setCredentials(user));
         setUser({
          email:"",
          password:"",
         })
         navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (<>
    <Link to="/"><button type="button" className="login-btn btn m-2 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>Back</button></Link>
    <div className='login flexed'>
      <div className="login_container col-8 d-flex ">
        <div className='login-image col-6'>
          <img src="./images/login.jpg" alt="" />
        </div>
        <div className='login-form d-flex flex-column justify-content-center align-items-center'>
          <h1>LOGIN</h1>
          <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter The email id' name='email' value={user.email} onChange={handelInput}/>
            <input type='password' placeholder='Password' name='password' value={user.password} onChange={handelInput}/>
            <button type="submit">Login</button>
            {/* <button className='google-button'> Google</button> */}
          </form>
          <p>Don't have a account,  <Link to='/signup'><span>Signup</span></Link></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;
