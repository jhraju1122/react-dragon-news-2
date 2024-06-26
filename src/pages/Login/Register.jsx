import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Register = () => {
        const handleRegister = e =>{
          e.preventDefault();
          console.log(e.currentTarget);
          const form = new FormData(e.currentTarget);
          const name = form.get('name');
          const photo = form.get('photo');
          const email = form.get('email');
          const password = form.get('password');
          console.log(email,name, photo, password);

          // create user
          createUser(email, password)
          .then(result =>{
            console.log(result.user)
          })
          .catch(error =>{
            console.log(error) 
          })
        }



    return (
         
        <div>
             <Navbar></Navbar>
             
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onClick={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="type your name here" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo " name='photo' className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;