import { useContext } from 'react';
import img from '../.../../../assets/authentication2 1.png'
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { registerWithEmail } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const password = form.password.value
        const email = form.email.value
        const photo = form.photo.value
        const info = { name, password, email, photo }
        registerWithEmail(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
        console.log(info);
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl  border">
                        <div className="text-center lg:text-left">
                            <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <h1 className='text-center font-bold text-2xl'>Sign Up</h1>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Your Photo Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn bg-[#D1A054] text-white' type="submit" value="Sign Up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;