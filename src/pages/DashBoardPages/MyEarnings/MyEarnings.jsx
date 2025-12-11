// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const MyEarnings = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     // Fetch completed deliveries
//     const { data: deliveries = [], isLoading } = useQuery({
//         queryKey: ["completedDeliveriesEarnings", user?.email],
//         enabled: !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(
//                 `/rider/completed-deliveries?email=${user.email}`
//             );
//             return res.data?.data || [];
//         },
//     });

//     if (isLoading) return <p>Loading earnings...</p>;

//     // =================== Helper Functions ===================

//     const calculateEarning = (parcel) => {
//         const sameDistrict =
//             parcel.sender_district?.toLowerCase() ===
//             parcel.receiver_district?.toLowerCase();

//         return sameDistrict
//             ? parcel.totalCost * 0.8
//             : parcel.totalCost * 0.3;
//     };

//     const isSameDay = (date) => {
//         const d = new Date(date);
//         const now = new Date();
//         return (
//             d.getFullYear() === now.getFullYear() &&
//             d.getMonth() === now.getMonth() &&
//             d.getDate() === now.getDate()
//         );
//     };

//     const isSameWeek = (date) => {
//         const d = new Date(date);
//         const now = new Date();
//         const diff = now - d;
//         return diff < 7 * 24 * 60 * 60 * 1000;
//     };

//     const isSameMonth = (date) => {
//         const d = new Date(date);
//         const now = new Date();
//         return (
//             d.getFullYear() === now.getFullYear() &&
//             d.getMonth() === now.getMonth()
//         );
//     };

//     const isSameYear = (date) => {
//         const d = new Date(date);
//         const now = new Date();
//         return d.getFullYear() === now.getFullYear();
//     };

//     // =================== Earnings Calculations ===================

//     let totalEarnings = 0;
//     let totalCashed = 0;
//     let totalPending = 0;

//     let todayEarnings = 0;
//     let weekEarnings = 0;
//     let monthEarnings = 0;
//     let yearEarnings = 0;

//     deliveries.forEach((parcel) => {
//         const earning = calculateEarning(parcel);
//         totalEarnings += earning;

//         if (parcel.payout_cashed) totalCashed += earning;
//         else totalPending += earning;

//         if (parcel.deliveredAt) {
//             if (isSameDay(parcel.deliveredAt)) todayEarnings += earning;
//             if (isSameWeek(parcel.deliveredAt)) weekEarnings += earning;
//             if (isSameMonth(parcel.deliveredAt)) monthEarnings += earning;
//             if (isSameYear(parcel.deliveredAt)) yearEarnings += earning;
//         }
//     });

//     // =================== UI ===================
//     return (
//         <div>
//             <h2 className="text-3xl font-semibold mb-4">My Earnings</h2>

//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
//                 <div className="p-5 bg-green-100 rounded">
//                     <h3 className="text-xl font-semibold">Total Earnings</h3>
//                     <p className="text-2xl font-bold">${totalEarnings.toFixed(2)}</p>
//                 </div>

//                 <div className="p-5 bg-blue-100 rounded">
//                     <h3 className="text-xl font-semibold">Cashed Out</h3>
//                     <p className="text-2xl font-bold">${totalCashed.toFixed(2)}</p>
//                 </div>

//                 <div className="p-5 bg-yellow-100 rounded">
//                     <h3 className="text-xl font-semibold">Pending</h3>
//                     <p className="text-2xl font-bold">${totalPending.toFixed(2)}</p>
//                 </div>
//             </div>

//             {/* Time-based analytics */}
//             <h3 className="text-2xl font-semibold mb-3">Earnings Analysis</h3>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
//                 <div className="p-4 bg-gray-100 rounded">
//                     <h4 className="font-semibold">Today</h4>
//                     <p className="text-xl font-bold">${todayEarnings.toFixed(2)}</p>
//                 </div>

//                 <div className="p-4 bg-gray-100 rounded">
//                     <h4 className="font-semibold">This Week</h4>
//                     <p className="text-xl font-bold">${weekEarnings.toFixed(2)}</p>
//                 </div>

//                 <div className="p-4 bg-gray-100 rounded">
//                     <h4 className="font-semibold">This Month</h4>
//                     <p className="text-xl font-bold">${monthEarnings.toFixed(2)}</p>
//                 </div>

//                 <div className="p-4 bg-gray-100 rounded">
//                     <h4 className="font-semibold">This Year</h4>
//                     <p className="text-xl font-bold">${yearEarnings.toFixed(2)}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyEarnings;


import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyEarnings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // ==================== FETCH COMPLETED DELIVERIES ====================
    const { data: deliveries = [], isLoading } = useQuery({
        queryKey: ["riderEarnings", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/rider/completed-deliveries?email=${user.email}`
            );
            return res.data?.data || [];
        },
    });

    if (isLoading) return <p>Loading earnings...</p>;

    // ==================== HELPER: GET DATE ====================
    const getParcelDate = (parcel) => {
        if (parcel.deliveredAt) return new Date(parcel.deliveredAt);
        if (parcel.creation_date) return new Date(parcel.creation_date);
        return null;
    };

    // ==================== EARNING CALCULATION RULE ====================
    const getEarning = (parcel) => {
        const isSameDistrict =
            parcel.sender_district?.toLowerCase() ===
            parcel.receiver_district?.toLowerCase();

        const fee = Number(parcel.totalCost) || 0;

        return isSameDistrict ? fee * 0.8 : fee * 0.3;
    };

    // ==================== DATE RANGE HELPERS ====================
    const now = new Date();

    const isToday = (date) =>
        date &&
        date.toDateString() === now.toDateString();

    const isThisWeek = (date) => {
        if (!date) return false;
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 7);

        return date >= startOfWeek && date < endOfWeek;
    };

    const isThisMonth = (date) =>
        date &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();

    const isThisYear = (date) =>
        date && date.getFullYear() === now.getFullYear();

    // ==================== CALCULATIONS ====================
    let totalEarnings = 0,
        todayEarnings = 0,
        weekEarnings = 0,
        monthEarnings = 0,
        yearEarnings = 0;

    deliveries.forEach((parcel) => {
        const earning = getEarning(parcel);
        const date = getParcelDate(parcel);

        totalEarnings += earning;

        if (isToday(date)) todayEarnings += earning;
        if (isThisWeek(date)) weekEarnings += earning;
        if (isThisMonth(date)) monthEarnings += earning;
        if (isThisYear(date)) yearEarnings += earning;
    });

    // ==================== CASHOUT LOGIC ====================
    const cashedOut = 0; // if you add a cashout system, update this
    const pending = totalEarnings - cashedOut;

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-3xl font-semibold mb-4">My Earnings</h2>

            {/* SUMMARY CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-6 rounded-xl bg-green-100">
                    <h3 className="text-xl font-bold">Total Earnings</h3>
                    <p className="text-3xl font-bold text-green-700">
                        ${totalEarnings.toFixed(2)}
                    </p>
                </div>

                <div className="p-6 rounded-xl bg-blue-100">
                    <h3 className="text-xl font-bold">Cashed Out</h3>
                    <p className="text-3xl font-bold text-blue-700">
                        ${cashedOut.toFixed(2)}
                    </p>
                </div>

                <div className="p-6 rounded-xl bg-yellow-100">
                    <h3 className="text-xl font-bold">Pending</h3>
                    <p className="text-3xl font-bold text-yellow-700">
                        ${pending.toFixed(2)}
                    </p>
                </div>
            </div>

            {/* ANALYTICS */}
            <h3 className="text-2xl font-semibold mb-3">Earnings Breakdown</h3>

            <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-100 rounded-xl">
                    <h4 className="text-lg font-semibold">Today</h4>
                    <p className="text-2xl font-bold">${todayEarnings.toFixed(2)}</p>
                </div>

                <div className="p-4 bg-gray-100 rounded-xl">
                    <h4 className="text-lg font-semibold">This Week</h4>
                    <p className="text-2xl font-bold">${weekEarnings.toFixed(2)}</p>
                </div>

                <div className="p-4 bg-gray-100 rounded-xl">
                    <h4 className="text-lg font-semibold">This Month</h4>
                    <p className="text-2xl font-bold">${monthEarnings.toFixed(2)}</p>
                </div>

                <div className="p-4 bg-gray-100 rounded-xl">
                    <h4 className="text-lg font-semibold">This Year</h4>
                    <p className="text-2xl font-bold">${yearEarnings.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default MyEarnings;
