

import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const [profilePic, setProfilePic] = useState('');
    const [fileName, setFileName] = useState('');
    const navigate = useNavigate();
    const axiosInstance = useAxios();

    const onSubmit = async (data) => {
        try {
            console.log(data);

            const result = await createUser(data.email, data.password);
            console.log(result.user);

            // 1️⃣ Save user info to your DB
            const userInfo = {
                email: data.email,
                role: 'user',
                created_at: new Date().toISOString(),
                last_log_in: new Date().toISOString(),
            };
            const userRes = await axiosInstance.post('/users', userInfo);
            console.log(userRes.data);

            // 2️⃣ Update Firebase profile
            await updateUserProfile(result.user, {
                displayName: data.name,
                photoURL: profilePic,
            });
            console.log('✅ Profile name pic updated');

            // 3️⃣ Show success message
            Swal.fire({
                icon: "success",
                title: "Account created successfully!",
                showConfirmButton: false,
                timer: 1500,
            });

            // 4️⃣ Redirect
            navigate('/');
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Registration failed",
                text: error.message,
            });
        }
    };

    // const onSubmit = data => {

    //     console.log(data);

    //     createUser(data.email, data.password)
    //         .then(async (result) => {
    //             console.log(result.user);

    //             // update userinfo in the database
    //             const userInfo = {
    //                 email: data.email,
    //                 role: 'user', // default role
    //                 created_at: new Date().toISOString(),
    //                 last_log_in: new Date().toISOString()
    //             }

    //             const userRes = await axiosInstance.post('/users', userInfo);
    //             console.log(userRes.data);

    //             // update user profile in firebase
    //             const userProfile = {
    //                 displayName: data.name,
    //                 photoURL: profilePic
    //             }
    //             updateUserProfile(userProfile)
    //                 .then(() => {
    //                     console.log('profile name pic updated')
    //                 })
    //                 .catch(error => {
    //                     console.log(error)
    //                 })
    //             // Show success message
    //             Swal.fire({
    //                 icon: "success",
    //                 title: "Account created successfully!",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             //   Redirect to home page
    //             navigate('/');

    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }



    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        if (!image) return;

        setFileName(image.name);

        const formData = new FormData();
        formData.append('image', image);


        const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`
        const res = await axios.post(imageUploadUrl, formData)

        setProfilePic(res.data.data.url);

    }

    return (
        <div>
            <h2 className="text-center text-white text-2xl font-semibold mb-6 tracking-wide">
                Creat An Account!
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* image upload */}
                <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-xl py-6 hover:border-[#FF6F00] transition-all cursor-pointer">
                    <label
                        htmlFor="imageUploadUrl"
                        className="flex flex-col items-center text-gray-300 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mb-2 text-[#FF6F00]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16l4-4a4 4 0 015.657 0L17 16m-2 2h6m-6 0a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v11a2 2 0 01-2 2z"
                            />
                        </svg>
                        {fileName ? (
                            <span className="text-sm text-white">{fileName}</span>
                        ) : (
                            <span className="text-sm text-gray-400">Click or drag to upload image</span>
                        )}
                    </label>
                    <input
                        id="imageUploadUrl"
                        type="file"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </div>


                {/* name */}
                <div className="relative">
                    <FiUser className="absolute top-3 left-3 text-gray-300 text-lg" />
                    <input
                        type="text" {...register('name', { required: true })}
                        placeholder="your name"
                        className="w-full pl-10 pr-4 py-2 bg-transparent border-b border-gray-400 text-white focus:outline-none focus:border-[#FF6F00]"
                    />
                </div>

                {/* email */}
                <div className="relative">
                    <FiMail className="absolute top-3 left-3 text-gray-300 text-lg" />
                    <input
                        type="email" {...register('email', { required: true })}
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
                    {errors.password?.type === 'required' &&
                        <p className="text-red-700 text-sm">
                            password is required
                        </p>
                    }
                    {errors.password?.type === 'minLength' &&
                        <p className="text-red-700 text-sm">
                            password must be 6 characters or longer
                        </p>
                    }
                </div>

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

