import React from "react";
import { Link } from "react-router-dom";

const Loggin = () => {


    const handelSubmit = (e) =>{
        e.preventDefault()
        console.log("successfully submitted")
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p>New to this website Ple   ase</p>
            <span className="font-bold"><Link to={'/register'}>Register</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
