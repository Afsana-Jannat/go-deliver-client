import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar
} from "recharts";

const DashboardHome = () => {

    // Dummy Data (পরে চাইলে API থেকে নিয়ে আসতে পারবে)
    const parcelData = [
        { month: "Jan", parcels: 20 },
        { month: "Feb", parcels: 35 },
        { month: "Mar", parcels: 50 },
        { month: "Apr", parcels: 40 },
        { month: "May", parcels: 60 },
    ];

    const paymentData = [
        { month: "Jan", amount: 120 },
        { month: "Feb", amount: 220 },
        { month: "Mar", amount: 180 },
        { month: "Apr", amount: 260 },
        { month: "May", amount: 300 },
    ];

    return (
        <div className="space-y-10">
            <h1 className="text-3xl text-gray-600 font-bold">Dashboard Overview</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#f6d3d3] text-gray-500 rounded-xl shadow">
                    <h3 className="text-lg">Total Parcels</h3>
                    <p className="text-4xl font-bold mt-2">145</p>
                </div>

                <div className="p-6 bg-[#cbddee] text-gray-500 rounded-xl shadow">
                    <h3 className="text-lg">Completed Deliveries</h3>
                    <p className="text-4xl font-bold mt-2">98</p>
                </div>

                <div className="p-6 bg-[#ddf3dd] text-gray-500 rounded-xl shadow">
                    <h3 className="text-lg">Total Earnings</h3>
                    <p className="text-4xl font-bold mt-2">$654</p>
                </div>
            </div>

            {/* Graphs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Line Chart */}
                <div className="bg-base-200 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-4">Parcels Per Month</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={parcelData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="parcels" stroke="#6366F1" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-base-200 p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-4">Monthly Earnings</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={paymentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="amount" barSize={40} fill="#10B981" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
