import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import axios from "axios";

const TrackPickup = () => {
    const { user } = useContext(AuthContext);
    const [parcels, setParcels] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPickupParcels = async () => {
        if (!user?.email) return;

        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/payments?email=${user.email}`
            );
            setParcels(res.data || []);
        } catch (error) {
            console.log("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPickupParcels();
    }, [user]);

    if (loading) return <p className="text-center text-lg">Loading pickup parcels...</p>;

    return (
        <div className="overflow-x-auto bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Track Pickup Parcels</h2>

            {parcels.length === 0 ? (
                <p>No parcels available for pickup tracking.</p>
            ) : (
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Amount</th>
                            <th>Transaction ID</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {parcels.map((p, index) => (
                            <tr key={p._id}>
                                <td>{index + 1}</td> {/* Index column */}
                                <td>৳{p.amount || 0}</td>
                                <td className="text-xs text-gray-600">{p.transactionId || "N/A"}</td>
                                <td>{p.paid_at ? new Date(p.paid_at).toLocaleString() : "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TrackPickup;

// import React, { useEffect, useState, useContext, useMemo } from "react";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import usePolling from "../../../hooks/usePolling";

// const TrackPickup = () => {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [payments, setPayments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchPayments = async () => {
//         if (!user?.email) return;
//         try {
//             const res = await axios.get(
//                 `${import.meta.env.VITE_BASE_URL}/payments?email=${encodeURIComponent(user.email)}`
//             );
//             // backend returns array directly (or an array in res.data)
//             const data = Array.isArray(res.data) ? res.data : res.data?.data ?? [];
//             setPayments(data);
//         } catch (err) {
//             console.error("fetchPayments:", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Poll every 8 seconds
//     usePolling(fetchPayments, 8000, !!user?.email);

//     // also fetch once on mount/user change
//     useEffect(() => { fetchPayments(); }, [user?.email]);

//     const rows = useMemo(() => payments, [payments]);

//     if (loading) return <p className="text-center">Loading pickup parcels…</p>;

//     return (
//         <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-2xl font-semibold mb-4">Track Pickup Parcels</h2>

//             {rows.length === 0 ? (
//                 <p>No paid parcels found.</p>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="table w-full">
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 {/* <th>Tracking ID</th>
//                                 <th>Parcel Title</th> */}
//                                 <th>Amount</th>
//                                 <th>Transaction</th>
//                                 <th>Paid At</th>
//                                 {/* <th>Status</th>
//                                 <th>Action</th> */}
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {rows.map((p, i) => (
//                                 <tr key={p._id || `${p.transactionId}-${i}`}>
//                                     <td>{i + 1}</td>
//                                     {/* <td>{p.tracking_id ?? "—"}</td>
//                                     <td>{p.title ?? "—"}</td> */}
//                                     <td>৳{(p.amount ?? p.amount_paid ?? 0).toFixed ? p.amount.toFixed(2) : (p.amount ?? 0)}</td>
//                                     <td className="text-xs text-gray-600">{p.transactionId ?? p.transaction_id ?? "—"}</td>
//                                     {/* <td>{(p.paid_at || p.paid_at_string) ? new Date(p.paid_at || p.paid_at_string).toLocaleString() : "—"}</td>
//                                     <td className="capitalize">{(p.delivery_status ?? p.deliveryStatus) ? (p.delivery_status ?? p.deliveryStatus).replace?.("_", " ") ?? (p.delivery_status ?? p.deliveryStatus) : "—"}</td>
//                                     */}
//                                     <td>
//                                         {/* navigate to parcel details; uses parcelId from payment doc */}
//                                         <button
//                                             onClick={() => {
//                                                 const parcelId = p.parcelId || p.parcel_id;
//                                                 if (parcelId) navigate(`/dashboard/parcel/${parcelId}`);
//                                                 else alert("Parcel ID not available for this payment.");
//                                             }}
//                                             className="btn btn-sm btn-primary"
//                                         >
//                                             View
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TrackPickup;

