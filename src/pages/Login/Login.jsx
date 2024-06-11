import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

 
const Login = () => {
        
         const handleLogin = e =>{
          e.preventDefault();
          console.log(e.currentTarget);
          const form = new FormDate(e.currentTarget);
          console.log(form);
         }



    return (
        <div>
            <Navbar></Navbar>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <Link className="btn btn-primary" to="/login">Login</Link>
          
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;