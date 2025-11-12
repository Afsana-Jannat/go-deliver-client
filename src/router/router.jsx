

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
import TrackParcel from "../pages/DashBoardPages/TrackParcel/TrackParcel";
import BeARider from "../pages/DashBoardPages/BeARider/BeARider";
import PendingRiders from "../pages/DashBoardPages/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/DashBoardPages/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/DashBoardPages/MakeAdmin/MakeAdmin";
import Forbidden from "../pages/Forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";

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

    {
        path: '/dashBoard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: "myParcels",
                Component: MyParcels,
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
                path: "track",
                Component: TrackParcel,
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
                path: "makeAdmin",
                element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
            },
        ]
    }
]);
