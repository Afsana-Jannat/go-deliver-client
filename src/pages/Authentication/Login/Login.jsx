import {
  FiMail,
  FiLock,
  FiTruck,
  FiArrowRight,
  FiShield,
  FiMapPin,
  FiClock,
  FiEye,
  FiEyeOff,
  FiPackage,
} from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // ================= DEMO LOGIN =================
  const handleDemoLogin = (email, password) => {
    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Demo Login Successful',
          timer: 1500,
          showConfirmButton: false,
        });

        navigate(location.state || '/dashboard', {
          replace: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      });
  };

  // ================= NORMAL LOGIN =================
  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
          timer: 1500,
          showConfirmButton: false,
        });

        navigate(location.state || '/', {
          replace: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      });
  };

  return (
    <main className="min-h-screen bg-[#F3F6FA] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
      {/* ================= MAIN CARD ================= */}
      <div className="w-full max-w-[1120px] overflow-hidden rounded-[26px] bg-white shadow-[0_18px_55px_rgba(16,57,99,0.12)] border border-gray-100">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          {/* =====================================================
              LEFT BRANDING
          ===================================================== */}
          <section className="relative bg-gradient-to-br from-[#062B55] via-[#0A3D70] to-[#0D4D83] px-7 py-8 sm:px-10 lg:px-11 xl:px-12">
            {/* Background decorations */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border-[30px] border-white/[0.025]" />
            <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full border-[35px] border-[#FF6F00]/[0.04]" />

            <div className="relative z-10 flex h-full flex-col">
              {/* ================= LOGO ================= */}
              <Link to="/" className="flex items-center gap-3 w-fit">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6F00] shadow-lg shadow-orange-500/20">
                  <FiTruck className="text-xl text-white" />
                </div>

                <div>
                  <h2 className="text-[22px] font-extrabold tracking-tight text-white">
                    Go<span className="text-[#FF6F00]">Deliver</span>
                  </h2>

                  <p className="text-[9px] uppercase tracking-[2px] text-blue-200">
                    Fast. Safe. Reliable.
                  </p>
                </div>
              </Link>

              {/* ================= HERO ================= */}
              <div className="mt-12 lg:mt-16">
                <span className="inline-flex items-center rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-[#FF984D]">
                  Welcome Back
                </span>

                <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-[46px]">
                  Delivering
                  <span className="block text-[#FF6F00]">trust to</span>
                  <span className="block">your door.</span>
                </h1>

                <p className="mt-5 max-w-[390px] text-sm leading-6 text-blue-100/70">
                  Manage deliveries, track parcels and stay connected with
                  GoDeliver from one simple platform.
                </p>
              </div>

              {/* ================= MINI INFO ================= */}
              <div className="mt-9 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
                  <div className="flex items-center gap-2">
                    <FiPackage className="text-[#FF6F00]" />
                    <span className="text-xs font-semibold text-white">
                      Easy Delivery
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] text-blue-200/50">
                    Simple & convenient
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-[#FF6F00]" />
                    <span className="text-xs font-semibold text-white">
                      Live Tracking
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] text-blue-200/50">
                    Real-time updates
                  </p>
                </div>
              </div>

              {/* ================= TRUST FEATURES ================= */}
              <div className="mt-auto pt-10">
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <FiTruck className="text-[#FF6F00]" />
                    </div>

                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Fast
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <FiShield className="text-[#FF6F00]" />
                    </div>

                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Secure
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <FiClock className="text-[#FF6F00]" />
                    </div>

                    <p className="mt-2 text-[11px] font-semibold text-white">
                      Reliable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              RIGHT LOGIN
          ===================================================== */}
          <section className="px-6 py-8 sm:px-9 sm:py-9 lg:px-10 xl:px-12">
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF3EA]">
                <FiTruck className="text-xl text-[#FF6F00]" />
              </div>

              <h2 className="mt-4 text-[28px] font-extrabold text-[#103963]">
                Welcome Back!
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Login to continue to your account
              </p>
            </div>

            {/* ================= FORM ================= */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              {/* Email */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#103963]">
                  Email Address
                </label>

                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                    })}
                    placeholder="Enter your email"
                    className={`h-12 w-full rounded-xl border ${
                      errors.email ? 'border-red-400' : 'border-gray-200'
                    } bg-[#FAFBFC] pl-11 pr-4 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF6F00] focus:bg-white focus:ring-4 focus:ring-[#FF6F00]/10`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#103963]">
                  Password
                </label>

                <div className="relative">
                  <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: true,
                      minLength: 6,
                    })}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#FAFBFC] pl-11 pr-11 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF6F00] focus:bg-white focus:ring-4 focus:ring-[#FF6F00]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-[#FF6F00]"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                {errors.password?.type === 'required' && (
                  <p className="mt-1 text-[11px] text-red-500">
                    Password is required
                  </p>
                )}

                {errors.password?.type === 'minLength' && (
                  <p className="mt-1 text-[11px] text-red-500">
                    Password must be 6 characters or longer
                  </p>
                )}
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6F00] to-[#FF8A3D] text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                LOGIN
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Register */}
              <p className="text-center text-xs text-gray-500">
                Don't have an account?
                <Link
                  to="/register"
                  className="ml-1 font-bold text-[#FF6F00] hover:text-[#103963]"
                >
                  Create Account
                </Link>
              </p>
            </form>

            {/* ================= SOCIAL ================= */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="flex justify-center">
              <SocialLogin />
            </div>

            {/* ================= DEMO ACCESS ================= */}
            <div className="mt-6 rounded-2xl border border-gray-100 bg-[#F8FAFC] p-4">
              <div className="mb-3 text-center">
                <h3 className="text-sm font-extrabold text-[#103963]">
                  Quick Demo Access
                </h3>

                <p className="mt-0.5 text-[10px] text-gray-400">
                  Try different GoDeliver roles
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {/* User */}
                <button
                  type="button"
                  onClick={() =>
                    handleDemoLogin('demoo_user@gmail.com', 'User@123')
                  }
                  className="group rounded-xl border border-blue-100 bg-blue-50 p-3 text-center transition-all hover:-translate-y-1 hover:bg-[#103963] hover:shadow-md"
                >
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600">
                    <FiMapPin className="text-sm" />
                  </div>

                  <p className="mt-2 text-[10px] font-extrabold text-[#103963] group-hover:text-white">
                    USER
                  </p>

                  <p className="mt-0.5 text-[9px] text-gray-400 group-hover:text-blue-100">
                    Customer
                  </p>
                </button>

                {/* Admin */}
                <button
                  type="button"
                  onClick={() =>
                    handleDemoLogin('demo_adminn@gmail.com', 'Admin@123')
                  }
                  className="group rounded-xl border border-orange-100 bg-orange-50 p-3 text-center transition-all hover:-translate-y-1 hover:bg-[#FF6F00] hover:shadow-md"
                >
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#FF6F00]">
                    <FiShield className="text-sm" />
                  </div>

                  <p className="mt-2 text-[10px] font-extrabold text-[#E85F00] group-hover:text-white">
                    ADMIN
                  </p>

                  <p className="mt-0.5 text-[9px] text-gray-400 group-hover:text-orange-50">
                    Management
                  </p>
                </button>

                {/* Rider */}
                <button
                  type="button"
                  onClick={() =>
                    handleDemoLogin('demo_rider@gmail.com', 'Rider@123')
                  }
                  className="group rounded-xl border border-green-100 bg-green-50 p-3 text-center transition-all hover:-translate-y-1 hover:bg-[#287A55] hover:shadow-md"
                >
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#287A55]">
                    <FiTruck className="text-sm" />
                  </div>

                  <p className="mt-2 text-[10px] font-extrabold text-[#287A55] group-hover:text-white">
                    RIDER
                  </p>

                  <p className="mt-0.5 text-[9px] text-gray-400 group-hover:text-green-50">
                    Delivery
                  </p>
                </button>
              </div>
            </div>

            {/* Bottom Trust */}
            <div className="mt-4 flex items-center justify-center gap-4 text-gray-400">
              <div className="flex items-center gap-1">
                <FiShield className="text-[#0D47A1]" />
                <span className="text-[9px]">Secure Login</span>
              </div>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              <div className="flex items-center gap-1">
                <FiClock className="text-[#FF6F00]" />
                <span className="text-[9px]">Reliable Service</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
