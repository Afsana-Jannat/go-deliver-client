import { useForm } from "react-hook-form";
import { FiMail, FiLock } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useAuth()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <h2 className="text-center text-white text-2xl font-semibold mb-6 tracking-wide">
                Creat An Account!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email */}
                <div className="relative">
                    <FiMail className="absolute top-3 left-3 text-gray-300 text-lg" />
                    <input
                        type="email" {...register('email')}
                        placeholder="Email ID"
                        className="w-full pl-10 pr-4 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-[#FF6F00]"
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <FiLock className="absolute top-3 left-3 text-gray-300 text-lg" />
                    <input
                        type="password" {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                        placeholder="Password"
                        className="w-full pl-10 pr-4 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-[#FF6F00]"
                    />
                    {
                        errors.password?.type === 'required' && <p
                            className="text-red-700 text-sm">
                            password us required
                        </p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p
                            className="text-red-700 text-sm">
                            password must be 6 characters or longer
                        </p>
                    }
                </div>


                {/* <div className="flex items-center justify-between text-gray-300 text-sm">
                          <label className="flex items-center gap-2">
                              <input type="checkbox" className="checkbox checkbox-xs" />
                              Remember me
                          </label>
                          <a href="#" className="hover:underline text-[#FF6F00]">
                              Forgot Password?
                          </a>
                      </div> */}

                {/* Button */}
                <button
                    type="submit"
                    className="w-full py-2 mt-3 bg-gradient-to-r from-[#103963] to-[#FF6F00] text-white font-semibold rounded-full hover:opacity-90 transition-all"
                >
                    Register
                </button>
                <p className="text-center">
                    <small>Already have an account? <Link
                        className="btn btn-link -mt-1"
                        to="/login">
                        Login</Link></small>
                </p>
            </form>
            <div className="text-center">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;