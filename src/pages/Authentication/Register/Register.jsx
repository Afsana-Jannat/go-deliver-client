import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FiMail,
  FiLock,
  FiUser,
  FiTruck,
  FiArrowRight,
  FiShield,
  FiUploadCloud,
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();

  const [profilePic, setProfilePic] = useState('');
  const [fileName, setFileName] = useState('');

  const navigate = useNavigate();
  const axiosInstance = useAxios();

  // =====================================================
  // IMAGE UPLOAD
  // =====================================================

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];

    if (!image) return;

    try {
      setFileName(image.name);

      const formData = new FormData();
      formData.append('image', image);

      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

      const res = await axios.post(imageUploadUrl, formData);

      setProfilePic(res.data.data.url);
    } catch (error) {
      console.error('Image upload failed:', error);

      setFileName('');
      setProfilePic('');

      Swal.fire({
        icon: 'error',
        title: 'Image Upload Failed',
        text: 'Please try uploading the image again.',
      });
    }
  };

  // =====================================================
  // REGISTER
  // =====================================================

  const onSubmit = async (data) => {
    try {
      console.log(data);

      // 1. Create Firebase user
      const result = await createUser(data.email, data.password);

      console.log(result.user);

      // 2. Save user information to database
      const userInfo = {
        email: data.email,
        role: 'user',
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      const userRes = await axiosInstance.post('/users', userInfo);

      console.log(userRes.data);

      // 3. Update Firebase profile
      await updateUserProfile(result.user, {
        displayName: data.name,
        photoURL: profilePic,
      });

      console.log('Profile name and picture updated');

      // 4. Success message
      Swal.fire({
        icon: 'success',
        title: 'Account Created Successfully!',
        text: 'Welcome to GoDeliver.',
        showConfirmButton: false,
        timer: 1500,
      });

      // 5. Redirect
      navigate('/');
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message,
      });
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#F5F7FA] px-4 py-8 sm:px-6 lg:px-8">
      {/* =====================================================
          MAIN REGISTER CARD
      ===================================================== */}

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1180px] items-center justify-center">
        <div className="w-full overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(16,57,99,0.14)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* =================================================
                LEFT BRANDING SECTION
            ================================================= */}

            <section className="relative flex min-h-[700px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#062B55] to-[#0D47A1] px-8 py-10 sm:px-12 lg:px-14 xl:px-16">
              {/* Logo */}

              <div>
                <Link to="/" className="inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6F00] shadow-lg shadow-orange-500/20">
                    <FiTruck className="text-2xl text-white" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-white">
                      Go<span className="text-[#FF6F00]">Deliver</span>
                    </h2>

                    <p className="mt-0.5 text-[10px] uppercase tracking-[2px] text-blue-200">
                      Fast. Safe. Reliable.
                    </p>
                  </div>
                </Link>

                {/* Hero */}

                <div className="mt-20 max-w-[500px]">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[4px] text-[#FF8A3D]">
                    Join GoDeliver
                  </p>

                  <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl xl:text-[58px]">
                    Deliver
                    <span className="block text-[#FF6F00]">smarter.</span>
                    <span className="block text-white">Live better.</span>
                  </h1>

                  <p className="mt-7 max-w-[440px] text-sm leading-7 text-blue-100/80 sm:text-base">
                    Create your GoDeliver account and enjoy fast, secure and
                    reliable parcel delivery at your fingertips.
                  </p>
                </div>
              </div>

              {/* Features */}

              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {/* Fast */}

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <FiTruck className="text-xl text-[#FF6F00]" />
                  </div>

                  <p className="text-sm font-bold text-white">Fast Delivery</p>

                  <p className="mt-1 text-[11px] text-blue-200/60">
                    Quick service
                  </p>
                </div>

                {/* Secure */}

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <FiShield className="text-xl text-[#FF6F00]" />
                  </div>

                  <p className="text-sm font-bold text-white">Secure</p>

                  <p className="mt-1 text-[11px] text-blue-200/60">
                    Safe platform
                  </p>
                </div>

                {/* Easy */}

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <FiArrowRight className="text-xl text-[#FF6F00]" />
                  </div>

                  <p className="text-sm font-bold text-white">Easy to Use</p>

                  <p className="mt-1 text-[11px] text-blue-200/60">
                    Simple experience
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                RIGHT REGISTER SECTION
            ================================================= */}

            <section className="bg-white px-6 py-10 sm:px-10 lg:px-12 xl:px-16">
              {/* Mobile Logo */}

              <div className="mb-8 flex justify-center lg:hidden">
                <Link to="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF6F00]">
                    <FiTruck className="text-xl text-white" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-[#103963]">
                      Go<span className="text-[#FF6F00]">Deliver</span>
                    </h2>

                    <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                      Fast. Safe. Reliable.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Header */}

              <div className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#FF6F00]/20 bg-[#FFF5ED]">
                  <FiUser className="text-2xl text-[#FF6F00]" />
                </div>

                <h2 className="text-3xl font-extrabold text-[#103963] sm:text-4xl">
                  Create an Account
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Join GoDeliver and start managing your deliveries.
                </p>
              </div>

              {/* =================================================
                  REGISTER FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                {/* ================= PROFILE IMAGE ================= */}

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#103963]">
                    Profile Picture
                  </label>

                  <label
                    htmlFor="profileImage"
                    className="group flex min-h-[100px] cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-[#FAFBFC] px-4 transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF9F5]"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1E7] text-[#FF6F00] transition-transform group-hover:scale-110">
                        <FiUploadCloud className="text-xl" />
                      </div>

                      {fileName ? (
                        <div>
                          <p className="max-w-[250px] truncate text-sm font-semibold text-[#103963]">
                            {fileName}
                          </p>

                          <p className="mt-1 text-xs text-green-600">
                            Image selected successfully
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm font-semibold text-[#103963]">
                            Upload your profile picture
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            Click to browse an image
                          </p>
                        </div>
                      )}
                    </div>

                    <input
                      id="profileImage"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* ================= NAME ================= */}

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#103963]">
                    Full Name
                  </label>

                  <div className="relative">
                    <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

                    <input
                      type="text"
                      {...register('name', {
                        required: true,
                      })}
                      placeholder="Enter your full name"
                      className="h-14 w-full rounded-xl border border-gray-200 bg-[#FAFBFC] pl-12 pr-4 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF6F00] focus:bg-white focus:ring-4 focus:ring-[#FF6F00]/10"
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      Name is required
                    </p>
                  )}
                </div>

                {/* ================= EMAIL ================= */}

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#103963]">
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

                    <input
                      type="email"
                      {...register('email', {
                        required: true,
                      })}
                      placeholder="Enter your email"
                      className="h-14 w-full rounded-xl border border-gray-200 bg-[#FAFBFC] pl-12 pr-4 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF6F00] focus:bg-white focus:ring-4 focus:ring-[#FF6F00]/10"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      Email is required
                    </p>
                  )}
                </div>

                {/* ================= PASSWORD ================= */}

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#103963]">
                    Password
                  </label>

                  <div className="relative">
                    <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

                    <input
                      type="password"
                      {...register('password', {
                        required: true,
                        minLength: 6,
                      })}
                      placeholder="Create a password"
                      className="h-14 w-full rounded-xl border border-gray-200 bg-[#FAFBFC] pl-12 pr-4 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#FF6F00] focus:bg-white focus:ring-4 focus:ring-[#FF6F00]/10"
                    />
                  </div>

                  {errors.password?.type === 'required' && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      Password is required
                    </p>
                  )}

                  {errors.password?.type === 'minLength' && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      Password must be 6 characters or longer
                    </p>
                  )}
                </div>

                {/* ================= REGISTER BUTTON ================= */}

                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#FF6F00] to-[#FF8A3D] text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25"
                >
                  CREATE ACCOUNT
                  <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* ================= LOGIN LINK ================= */}

                <p className="text-center text-sm text-gray-500">
                  Already have an account?
                  <Link
                    to="/login"
                    className="ml-1 font-bold text-[#FF6F00] transition-colors hover:text-[#103963]"
                  >
                    Login
                  </Link>
                </p>
              </form>

              {/* ================= DIVIDER ================= */}

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />

                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* ================= SOCIAL LOGIN ================= */}

              <div className="flex justify-center">
                <SocialLogin />
              </div>

              {/* ================= TRUST FOOTER ================= */}

              <div className="mt-6 flex items-center justify-center gap-5 border-t border-gray-100 pt-5">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <FiShield className="text-[#0D47A1]" />

                  <span className="text-[10px] sm:text-xs">
                    Secure Registration
                  </span>
                </div>

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <div className="flex items-center gap-1.5 text-gray-400">
                  <FiTruck className="text-[#FF6F00]" />

                  <span className="text-[10px] sm:text-xs">GoDeliver</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
