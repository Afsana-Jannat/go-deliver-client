import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiHome, FiPackage, FiLogOut, FiSend, FiAlertOctagon, FiUserCheck, FiPauseCircle, } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";
import useUserRole from "../hooks/useUserRole";

const DashboardLayout = () => {

    const { role, roleLoading } = useUserRole();
    console.log(role)
    return (
        <div className="drawer lg:drawer-open min-h-screen bg-base-100">
            {/* Toggle checkbox for drawer */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* === Main content area === */}
            <div className="drawer-content flex flex-col">
                {/* 🔹 Top Navbar */}
                <div className="w-full navbar bg-base-200 border-b">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" className="btn btn-ghost btn-square">
                            <FiMenu className="text-xl" />
                        </label>
                    </div>

                    <div className="flex-1 px-2 text-xl font-semibold">
                        Go-Deliver Dashboard
                    </div>

                    {/* <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://i.pravatar.cc/100"
                                        alt="User Avatar"
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
                            >
                                <li><Link to="/dashboard/profile">Profile</Link></li>
                                <li><Link to="/dashboard/settings">Settings</Link></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>

                {/* 🔹 Page content goes here */}
                <main className="flex-1 p-6 bg-base-100 overflow-y-auto">
                    <Outlet />
                </main>
            </div>

            {/* === Sidebar === */}
            <div className="drawer-side">
                <label
                    htmlFor="dashboard-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <ul className="menu bg-base-200 min-h-full w-72 p-4 text-base-content">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-bold text-primary">GoDeliver</h2>
                        <p className="text-sm text-gray-500">Manage your parcels easily</p>
                    </div>

                    <li><Link to="/dashboard/"><FiHome /> Dashboard Home</Link></li>
                    <li><Link to="/dashboard/myParcels"><FiPackage /> My Parcels</Link></li>
                    <li><Link to="/dashboard/paymentHistory"><FiSend />Payment History</Link></li>
                    <li><Link to="/dashboard/track"><FiAlertOctagon />Track a Package</Link></li>
                    {!roleLoading && role === 'admin' &&
                        <>
                            <li><Link to="/dashboard/activeRiders"><FiUserCheck />Active Riders</Link></li>
                            <li><Link to="/dashboard/pendingRiders"><FiPauseCircle />Pending Riders</Link></li>
                            <li><Link to="/dashboard/makeAdmin"><FaUserShield />Make Admin</Link></li>
                        </>
                    }
                    <li><Link to="/login"><FiLogOut /> Logout</Link></li>

                    <div className="mt-6 border-t border-gray-300 pt-4 text-xs text-gray-500 text-center">
                        © {new Date().getFullYear()} GoDeliver
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
