import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Loggin = () => {

  const {signInUser, signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()

  const handelLogginWithGoogle = () => {
    signInWithGoogle(navigate('/'))
    
  }


    const handelSubmit = (e) =>{
        e.preventDefault()
        // console.log("successfully submitted")
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        signInUser(email, password)
        .then((result) => {
          console.log(result.user)
          e.target.reset(navigate('/'))
        })
        .catch(error => {
          console.log('I am error vai', error.message)
        })
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
            <p>
              <button onClick={handelLogginWithGoogle} className="btn btn-ghost text-center">Google</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loggin;
