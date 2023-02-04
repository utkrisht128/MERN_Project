import React from "react";
import { useState } from "react";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const Signup =()=> {
    const navigate = useNavigate();
    const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword
      })
    });

    const data = await res.json();

    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");

      navigate('/login');
    }
  };
  return (
    <>
        <Navbar/>

    <div>
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="id-name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="id-name"
              value={user.name}
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="id-Email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="id-Email"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="Password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="CPassword">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="CPassword"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="PhoneNo">Phone No.</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              id="PhoneNo"
              value={user.phone}
              onChange={handleInputs}
              placeholder="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Profession">Your Profession</label>
            <input
              type="text"
              name="work"
              className="form-control"
              id="Profession"
              value={user.work}
              onChange={handleInputs}
              placeholder="Your Profession"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary  m-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
              </>
  );
}

export default Signup;