
import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#103963] via-[#1b4d75] to-[#FF6F00]"
            style={{
                backgroundImage:
                    "url('https://i.pinimg.com/736x/86/02/96/860296a4ebce82b94effb30d123d636a.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Glass Card */}
            <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 w-[90%] max-w-sm shadow-2xl">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#103963] to-[#FF6F00] flex items-center justify-center shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="w-12 h-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                            />
                        </svg>
                    </div>
                </div>
                {/* Heading */}

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
