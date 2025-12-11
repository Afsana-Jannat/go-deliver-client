// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
// import axios from "axios";
// import Swal from "sweetalert2";

// const PendingDeliveries = () => {
//     // const { user } = useContext(AuthContext);
//     // const [parcels, setParcels] = useState([]);
//     // const [loading, setLoading] = useState(true);

//     // const fetchParcels = async () => {
//     //     setLoading(true);
//     //     const res = await fetch(`${import.meta.env.VITE_BASE_URL}/rider/parcels?email=${user?.email}`);
//     //     const data = await res.json();
//     //     setParcels(data.data || []);
//     //     setLoading(false);
//     // };

//     // useEffect(() => {
//     //     if (user?.email) fetchParcels();
//     // }, [user]);

//     // // ========= UPDATE STATUS HANDLER =========
//     // const updateStatus = async (id, newStatus) => {
//     //     const res = await fetch(`${import.meta.env.VITE_BASE_URL}/rider/update-status/${id}`, {
//     //         method: "PATCH",
//     //         headers: { "Content-Type": "application/json" },
//     //         body: JSON.stringify({ delivery_status: newStatus }),
//     //     });

//     //     const result = await res.json();

//     //     if (result.success) {
//     //         toast.success(`Status updated to ${newStatus}`);
//     //         fetchParcels(); // refresh data
//     //     } else {
//     //         toast.error("Failed to update status");
//     //     }
//     // };

//     // if (loading) return <p className="text-center text-lg">Loading Pending Deliveries...</p>;


//     const { user } = useContext(AuthContext);  // <-- FIXED
//     const [parcels, setDeliveries] = useState([]);

//     const fetchDeliveries = async () => {
//         if (!user?.email) return;

//         try {
//             const res = await axios.get(
//                 `${import.meta.env.VITE_BASE_URL}/rider/parcels?email=${user.email}`
//             );

//             setDeliveries(res.data?.data || []);
//         } catch (error) {
//             console.log("Fetch error:", error);
//             Swal.fire("Error", "Failed to load pending deliveries", "error");
//         }
//     };

//     useEffect(() => {
//         fetchDeliveries();
//     }, [user]);

//     const updateStatus = async (id, newStatus) => {
//         try {
//             await axios.patch(`${import.meta.env.VITE_BASE_URL}/parcels/${id}/status`, {
//                 status: newStatus,
//             });

//             Swal.fire("Success!", "Status updated!", "success");
//             fetchDeliveries();
//         } catch (err) {
//             Swal.fire("Error!", "Failed to update!", "error");
//         }
//     };
//     return (
//         <div className="overflow-x-auto bg-white p-6 rounded-xl shadow">
//             <h2 className="text-2xl font-semibold mb-4">Pending Deliveries</h2>

//             {parcels.length === 0 ? (
//                 <p>No pending deliveries assigned.</p>
//             ) : (
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th>Tracking ID</th>
//                             <th>Receiver</th>
//                             <th>Delivery Address</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {parcels.map((parcel) => (
//                             <tr key={parcel._id}>
//                                 <td>{parcel.tracking_id}</td>
//                                 <td>
//                                     <div>
//                                         <p>{parcel.receiver_name}</p>
//                                         <p className="text-xs text-gray-500">{parcel.receiver_contact}</p>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     {parcel.receiver_center}, {parcel.receiver_district}
//                                 </td>
//                                 <td className="capitalize">{parcel.delivery_status.replace("_", " ")}</td>

//                                 <td>
//                                     {parcel.delivery_status === "rider_assigned" && (
//                                         <button
//                                             onClick={() => updateStatus(parcel._id, "in_transit")}
//                                             className="btn btn-sm btn-primary"
//                                         >
//                                             Mark as Picked Up
//                                         </button>
//                                     )}

//                                     {parcel.delivery_status === "in_transit" && (
//                                         <button
//                                             onClick={() => updateStatus(parcel._id, "delivered")}
//                                             className="btn btn-sm btn-success"
//                                         >
//                                             Mark as Delivered
//                                         </button>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default PendingDeliveries;


import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const PendingDeliveries = () => {
    const { user } = useContext(AuthContext);
    const [parcels, setDeliveries] = useState([]);

    // ============================
    // FETCH DELIVERIES FOR RIDER
    // ============================
    const fetchDeliveries = async () => {
        if (!user?.email) return;

        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/rider/parcels?email=${user.email}`
            );

            setDeliveries(res.data?.data || []);
        } catch (error) {
            console.log("Fetch error:", error);
            Swal.fire("Error", "Failed to load pending deliveries", "error");
        }
    };

    useEffect(() => {
        fetchDeliveries();
    }, [user]);


    // ============================
    // UPDATE DELIVERY STATUS + ADD TRACKING LOG
    // ============================
    const updateStatus = async (id, newStatus) => {
        try {
            const trackingMessage =
                newStatus === "in_transit"
                    ? "Rider picked up the parcel"
                    : newStatus === "delivered"
                        ? "Parcel delivered to the receiver"
                        : "Status updated";

            await axios.patch(
                `${import.meta.env.VITE_BASE_URL}/parcels/${id}/status`,
                {
                    status: newStatus,
                    message: trackingMessage, // <-- tracking timeline message
                }
            );

            Swal.fire("Success!", "Status updated!", "success");

            fetchDeliveries(); // reload list
        } catch (err) {
            Swal.fire("Error!", "Failed to update!", "error");
        }
    };


    return (
        <div className="overflow-x-auto bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Pending Deliveries</h2>

            {parcels.length === 0 ? (
                <p>No pending deliveries assigned.</p>
            ) : (
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Tracking ID</th>
                            <th>Receiver</th>
                            <th>Delivery Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {parcels.map((parcel) => (
                            <tr key={parcel._id}>
                                <td>{parcel.tracking_id}</td>

                                <td>
                                    <div>
                                        <p>{parcel.receiver_name}</p>
                                        <p className="text-xs text-gray-500">
                                            {parcel.receiver_contact}
                                        </p>
                                    </div>
                                </td>

                                <td>
                                    {parcel.receiver_center}, {parcel.receiver_district}
                                </td>

                                <td className="capitalize">
                                    {parcel.delivery_status.replace("_", " ")}
                                </td>

                                <td>
                                    {/* Rider Assigned → Pick Up Button */}
                                    {parcel.delivery_status === "rider_assigned" && (
                                        <button
                                            onClick={() =>
                                                updateStatus(parcel._id, "in_transit")
                                            }
                                            className="btn btn-sm btn-primary"
                                        >
                                            Mark as Picked Up
                                        </button>
                                    )}

                                    {/* Picked Up → Delivered Button */}
                                    {parcel.delivery_status === "in_transit" && (
                                        <button
                                            onClick={() =>
                                                updateStatus(parcel._id, "delivered")
                                            }
                                            className="btn btn-sm btn-success"
                                        >
                                            Mark as Delivered
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PendingDeliveries;
