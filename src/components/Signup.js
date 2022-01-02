import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext"
import "../App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
     <div className="container" style={{ width: "400px" }}>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3" controlId="formBasicEmail">
          <label htmlFor="exampleInputEmail1">Email address</label>
            <input className="form-control"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3" controlId="formBasicPassword">
          <label htmlFor="exampleInputPassword1">Password</label>
            <input className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
          <button  className="btn btn-primary" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="p-4 box mt-3 text-center" style={{height:"10vh"}}>
        Already have an account? <Link to="/">Log In</Link>
      </div>
      </div>
    </>
  );
};

export default Signup;