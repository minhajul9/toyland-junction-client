import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../Hook/useTitle';

const SignUp = () => {

    useTitle('Toyland Junction | Sign Up')

    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="hero py-28 bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="text-center lg:text-left md:mr-40">

                    <img src="https://i.ibb.co/Sf6Jrtf/71c-D80y87z-L-SL1500-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className="text-3xl font-bold mt-8 ml-8">Sign Up</p>
                    <div className="card-body">

                        <form onSubmit={handleCreateUser} >
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                            </div>

                            {/* pass */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                            </div>

                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' required placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <p className='py-4 text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p>Already have an account? <Link className='text-orange-600' to='/login'>Login</Link></p>
                    </div>
                    <div className="divider">OR</div>

                    <div onClick={handleGoogleSignIn} className='text-center py-4'>
                        <button className="btn btn-circle">
                            <FaGoogle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;