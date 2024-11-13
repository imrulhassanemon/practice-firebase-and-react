import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

  const navigate = useNavigate()
  
    const handelRegister = (e)=>{
        e.preventDefault()
        // console.log('register me ')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password)

        createUser(email, password)
        .then((result)=>{
          console.log(result.user);
          e.target.reset() 
          navigate('/')
        })
        .catch(error => {
          console.log("Hello boss I am Error", error.message);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Register now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p>Already have an account</p>
            <span className="font-bold"><Link to={'/login'}>Login</Link></span>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;