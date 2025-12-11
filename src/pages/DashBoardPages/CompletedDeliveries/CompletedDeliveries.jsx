// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const CompletedDeliveries = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const { data, isLoading } = useQuery({
//         queryKey: ["completedDeliveries", user?.email],
//         enabled: !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(
//                 `/rider/completed-deliveries?email=${user.email}`
//             );
//             return res.data?.data || [];
//         },
//     });

//     if (isLoading) return <p>Loading completed deliveries...</p>;

//     const deliveries = data || [];

//     // Calculate total earnings dynamically
//     const totalEarnings = deliveries.reduce((sum, parcel) => {
//         const districtMatch =
//             parcel.sender_district.toLowerCase() ===
//             parcel.receiver_district.toLowerCase();
//         const earning = districtMatch
//             ? parcel.totalCost * 0.8
//             : parcel.totalCost * 0.3;
//         return sum + earning;
//     }, 0);

//     return (
//         <div>
//             <h2 className="text-3xl font-semibold mb-4">
//                 Completed Deliveries: {deliveries.length}
//             </h2>
//             <h3 className="text-xl mb-4">
//                 Total Earnings: ${totalEarnings.toFixed(2)}
//             </h3>

//             <div className="overflow-x-auto">
//                 <table className="table table-zebra w-full">
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Tracking ID</th>
//                             <th>Receiver</th>
//                             <th>Address</th>
//                             <th>Delivery Status</th>
//                             <th>Fee</th>
//                             <th>Rider Earning</th>
//                             <th>Delivered At</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {deliveries.map((parcel, index) => {
//                             const districtMatch =
//                                 parcel.sender_district.toLowerCase() ===
//                                 parcel.receiver_district.toLowerCase();
//                             const earning = districtMatch
//                                 ? parcel.totalCost * 0.8
//                                 : parcel.totalCost * 0.3;

//                             return (
//                                 <tr key={parcel._id.$oid}>
//                                     <td>{index + 1}</td>
//                                     <td>{parcel.tracking_id}</td>
//                                     <td>
//                                         <p>{parcel.receiver_name}</p>
//                                         <p className="text-xs text-gray-500">
//                                             {parcel.receiver_contact}
//                                         </p>
//                                     </td>
//                                     <td>
//                                         {parcel.receiver_center}, {parcel.receiver_district}
//                                     </td>
//                                     <td className="capitalize">
//                                         {parcel.delivery_status.replace("_", " ")}
//                                     </td>
//                                     <td>${parcel.totalCost.toFixed(2)}</td>
//                                     <td>${earning.toFixed(2)}</td>
//                                     <td>
//                                         {parcel.deliveredAt
//                                             ? new Date(parcel.deliveredAt).toLocaleString()
//                                             : "N/A"}
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default CompletedDeliveries;


import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CompletedDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["completedDeliveries", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/rider/completed-deliveries?email=${user.email}`
            );
            return res.data?.data || [];
        },
    });

    const cashoutMutation = useMutation({
        mutationFn: async (parcelId) => {
            const res = await axiosSecure.patch(`/rider/completed-deliveries/${parcelId}/cashout`);
            return res.data;
        },
        onSuccess: (data) => {
            Swal.fire({
                icon: "success",
                title: "Cashed Out",
                text: `You earned $${data.payout.toFixed(2)}`,
                timer: 1500,
                showConfirmButton: false,
            });
            refetch();
        },
        onError: () => {
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Cashout failed",
            });
        },
    });

    if (isLoading) return <p>Loading completed deliveries...</p>;

    const deliveries = data || [];

    const totalEarnings = deliveries.reduce((sum, parcel) => {
        const districtMatch = parcel.sender_district?.toLowerCase() === parcel.receiver_district?.toLowerCase();
        const earning = districtMatch ? parcel.totalCost * 0.8 : parcel.totalCost * 0.3;
        return sum + earning;
    }, 0);

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">
                Completed Deliveries: {deliveries.length}
            </h2>
            <h3 className="text-xl mb-4">
                Total Earnings: ${totalEarnings.toFixed(2)}
            </h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tracking ID</th>
                            <th>Receiver</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Fee</th>
                            <th>Rider Earning</th>
                            <th>Delivered At</th>
                            <th>Cash Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveries.map((parcel, index) => {
                            const districtMatch = parcel.sender_district?.toLowerCase() === parcel.receiver_district?.toLowerCase();
                            const earning = districtMatch ? parcel.totalCost * 0.8 : parcel.totalCost * 0.3;

                            return (
                                // <tr key={parcel._id.$oid || parcel._id}>
                                <tr key={parcel._id.toString()}>
                                    <td>{index + 1}</td>
                                    <td>{parcel.tracking_id}</td>
                                    <td>
                                        <p>{parcel.receiver_name}</p>
                                        <p className="text-xs text-gray-500">{parcel.receiver_contact}</p>
                                    </td>
                                    <td>{parcel.receiver_center}, {parcel.receiver_district}</td>
                                    <td className="capitalize">{parcel.delivery_status.replace("_", " ")}</td>
                                    <td>${parcel.totalCost.toFixed(2)}</td>
                                    <td>${earning.toFixed(2)}</td>
                                    <td>{parcel.deliveredAt ? new Date(parcel.deliveredAt).toLocaleString() : "N/A"}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            disabled={parcel.payout_cashed}
                                            onClick={() => cashoutMutation.mutate(parcel._id.$oid || parcel._id)}
                                        >
                                            {parcel.payout_cashed ? "Cashed" : "Cash Out"}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedDeliveries;
