import { useForm } from "react-hook-form";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div>
            <h2 className="text-center text-white text-2xl font-semibold mb-6 tracking-wide">
                Please Login
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
                    LOGIN
                </button>
                <p className="text-center">
                    <small>New to this website? <Link
                        className="btn btn-link -mt-1"
                        to="/register">
                        Register</Link></small>
                </p>
            </form>
            <div className="text-center">
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;