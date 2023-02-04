import React,{useState} from "react";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Login=()=> {
    const navigate = useNavigate();

    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const loginUser =async (e) =>{
        e.preventDefault();
        const res= await fetch("/signin",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
              })
        });
        const data=res.json();
        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials")
        }else{
            window.alert("Login Succesfully");
            console.log("Login Succesfully");
            navigate('/');
        }
    }
  return (
    <>
        <Navbar/>

    <div>
      <h1 className="text-center mt-4">Log in</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="id-email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="id-email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="id-Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="id-Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary  m-4" onClick={loginUser}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
              </>
  );
}

export default Login;