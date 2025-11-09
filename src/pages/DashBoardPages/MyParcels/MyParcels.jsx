import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })

    const handleview = (id) => {
        console.log("view parcel", id)
    }

    const handlePay = (id) => {
        console.log("parcel payment", id)
        navigate(`/dashboard/payment/${id}`)
    }

    // Format ISO date to readable string
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString(); // e.g., "10/31/2025, 4:59:25 PM"
    };

    console.log(parcels)

    if (!parcels || parcels.length === 0) {
        return (
            <div className="text-center mt-10 text-gray-500">
                No parcels found.
            </div>
        );
    }


    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "You are about to delete this parcel permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        });

        if (confirm.isConfirmed) {
            try {
                const res = await axiosSecure.delete(`/parcels/${id}`);
                if (res.data.deletedCount > 0) {
                    await Swal.fire({
                        title: "Deleted!",
                        text: "Your parcel has been deleted successfully.",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false
                    });
                    refetch(); // Refresh parcel list
                } else {
                    Swal.fire("Error!", "Parcel not found or already deleted.", "error");
                }
            } catch (error) {
                console.error("Delete failed:", error);
                Swal.fire("Error!", "Failed to delete parcel. Try again.", "error");
            }
        }
    };


    return (
        <div className="w-full space-y-4">
            {/* Large screens: Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table w-full border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Created At</th>
                            <th>Cost (৳)</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id}>
                                <td>{index + 1}</td>
                                <td>
                                    {parcel.title}
                                </td>
                                <td>
                                    <span className={`badge ${parcel.type === "document" ? "bg-[#edc8e7]" : "bg-[#bfc2e6]"}`}>
                                        {parcel.type}
                                    </span>
                                </td>
                                <td>{formatDate(parcel.creation_date)}</td>
                                <td>{parcel.totalCost}৳</td>
                                <td>
                                    <span className={`badge ${parcel.payment_status === "paid" ? "badge-success" : "badge-warning"}`}>
                                        {parcel.payment_status}
                                    </span>
                                </td>
                                <td className="flex gap-2 flex-wrap">
                                    <button
                                        onClick={() => handleview(parcel._id)}
                                        className="btn btn-sm bg-[#cbdff4]">View</button>
                                    <button
                                        onClick={() => handlePay(parcel._id)}
                                        className="btn btn-sm bg-[#ebd8c4]" disabled={parcel.payment_status === "paid"}>Pay</button>
                                    <button
                                        onClick={() => handleDelete(parcel._id)}
                                        className="btn btn-sm bg-red-400">X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Small screens: Card layout */}
            <div className="md:hidden flex flex-col gap-4">
                {parcels.map((parcel) => (
                    <div key={parcel._id} className="card shadow-md bg-white p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <span className={`badge ${parcel.type === "document" ? "bg-[#edc8e7]" : "bg-[#bfc2e6]"}`}>
                                {parcel.type}
                            </span>
                            <span className="text-sm text-gray-500">{formatDate(parcel.creation_date)}</span>
                        </div>
                        <div className="mb-2">
                            <p><strong>Cost:</strong> ৳{parcel.totalCost}</p>
                            <p>
                                <strong>Payment:</strong>
                                <span className={`ml-2 badge ${parcel.payment_status === "paid" ? "badge-success" : "badge-warning"}`}>
                                    {parcel.payment_status}
                                </span>
                            </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <button onClick={() => handleview(parcel._id)} className="btn btn-sm bg-[#cbdff4] w-full">View</button>
                            <button
                                onClick={() => handlePay(parcel._id)}
                                className="btn btn-sm bg-[#ebd8c4] w-full"
                                disabled={parcel.payment_status === "paid"}>
                                Pay</button>
                            <button
                                onClick={() => handleDelete(parcel._id)}
                                className="btn btn-sm bg-red-400 w-full">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyParcels;