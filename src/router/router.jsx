

import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcels from "../pages/DashBoardPages/MyParcels/MyParcels";
import Payment from "../pages/DashBoardPages/Payment/Payment";
import PaymentHistory from "../pages/DashBoardPages/PaymentHistory/PaymentHistory";
import BeARider from "../pages/DashBoardPages/BeARider/BeARider";
import PendingRiders from "../pages/DashBoardPages/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/DashBoardPages/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/DashBoardPages/MakeAdmin/MakeAdmin";
import Forbidden from "../pages/Forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";
import AssignRider from "../pages/DashBoardPages/AssignRider/AssignRider";
import Contact from "../pages/Contact/Contact";
import DashboardHome from "../pages/DashBoardPages/DashboardHome";
import RiderRoute from "../routes/riderRoute";
import PendingDeliveries from "../pages/DashBoardPages/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../pages/DashBoardPages/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../pages/DashBoardPages/MyEarnings/MyEarnings";
import TrackPickup from "../pages/DashBoardPages/TrackPickup/TrackPickup";
import ParcelTracking from "../pages/DashBoardPages/ParcelTracking/ParcelTracking";
import BookParcel from "../pages/DashBoardPages/BookParcel/BookParcel";
import ParcelDetails from "../pages/DashBoardPages/MyParcels/ParcelDetails";
import PickupScan from "../pages/DashBoardPages/PickupScan/PickupScan";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "coverage",
                Component: Coverage,
                loader: () => fetch("/districtsData.json"),
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "forbidden",
                Component: Forbidden,
            },
            {
                path: 'beARider',
                element: <PrivateRoute><BeARider></BeARider></PrivateRoute>,
                loader: () => fetch("/districtsData.json"),
            },
            {
                path: "sendParcel",
                element: (
                    <PrivateRoute>
                        <SendParcel />
                    </PrivateRoute>
                ),
                loader: () => fetch("/districtsData.json"),
            },
        ],
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            },
        ],
    },

    // rider route
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "pending-deliveries",
                element: <RiderRoute><PendingDeliveries /></RiderRoute>
            },
            {
                path: "completed-deliveries",
                element: <RiderRoute><CompletedDeliveries /></RiderRoute>
            },
            {
                path: "my-earnings",
                element: <RiderRoute><MyEarnings /></RiderRoute>
            },
            {
                path: "pickup/:trackingId",
                element: <RiderRoute><PickupScan></PickupScan></RiderRoute>
            },
        ]
    },



    // admin route

    {
        path: '/dashBoard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: "myParcels",
                Component: MyParcels,
            },
            {
                path: "parcels/:id",
                element: <ParcelDetails></ParcelDetails>
            },
            {
                path: "payment/:parcelId",
                Component: Payment,
            },
            {
                path: "paymentHistory",
                Component: PaymentHistory,
            },
            {
                path: "track-pickup",
                Component: TrackPickup,
            },
            {
                path: "parcel-tracking",
                Component: ParcelTracking,
            },
            {
                path: 'assignRider',
                element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
            },
            {
                path: "pendingRiders",
                element: <AdminRoute><PendingRiders></PendingRiders></AdminRoute>
            },
            {
                path: "activeRiders",
                element: <AdminRoute><ActiveRiders></ActiveRiders></AdminRoute>
            },
            {
                path: "bookParcel",
                element: <AdminRoute><BookParcel></BookParcel></AdminRoute>
            },
            {
                path: "makeAdmin",
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },
        ]
    }
]);
