import { TbTruckDelivery } from "react-icons/tb";

const HowWorks = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8 mb-8">
            <h1 className="text-3xl text-[#103963] mb-4 font-extrabold">How it Works</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="bg-gray-100 p-6 rounded-xl">
                    <TbTruckDelivery className="text-5xl text-gray-500" />
                    <h1 className="text-gray-600 mt-2 mb-2 text-xl font-semibold">Booking Pick & Drop</h1>
                    <p className="text-gray-500 text-sm">From personal package to business shipments -- we deliver on time every time</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl">
                    <TbTruckDelivery className="text-5xl text-gray-500" />
                    <h1 className="text-gray-600 mt-2 mb-2 text-xl font-semibold">Cash On Delivery</h1>
                    <p className="text-gray-500 text-sm">From personal package to business shipments -- we deliver on time every time</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl">
                    <TbTruckDelivery className="text-5xl text-gray-500" />
                    <h1 className="text-gray-600 mt-2 mb-2 text-xl font-semibold">Delivery Hub</h1>
                    <p className="text-gray-500 text-sm">From personal package to business shipments -- we deliver on time every time</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl">
                    <TbTruckDelivery className="text-5xl text-gray-500" />
                    <h1 className="text-gray-600 mt-2 mb-2 text-xl font-semibold">Booking SME & Corporate</h1>
                    <p className="text-gray-500 text-sm">From personal package to business shipments -- we deliver on time every time</p>
                </div>

            </div>
        </div>
    );
};

export default HowWorks;