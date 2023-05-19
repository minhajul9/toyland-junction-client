import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero py-28 bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="text-center lg:text-left md:mr-40">
                    
                    <img src="https://i.ibb.co/Sf6Jrtf/71c-D80y87z-L-SL1500-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <p className="text-3xl font-bold mt-8 ml-8">Login</p>
                    <div className="card-body">
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p>New here? <Link className='text-orange-600' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;