import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../.../../../assets/authentication2 1.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const value = useRef()
    const { loginWithEmail } = useContext(AuthContext)
    const validate = () => {
        const capcha = value.current.value;
        if (validateCaptcha(capcha)) {
            console.log({ success: 'verify captcha' });
        }
        else {
            return setError('Captcha Does NOT matched');
        }
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginWithEmail(email, password)
            .then(result => {
                console.log(result.user);
               navigate(location ? location?.state : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl border">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-center font-bold text-2xl'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input ref={value} type="text" placeholder="captcha" className="input input-bordered" required />
                                <button onClick={validate} className="btn w-full my-2">Login</button>
                            </div>
                            {
                                error && <p>{error}</p>
                            }
                        </form>
                        <div>
                            <button className='btn btn-success w-full'>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;