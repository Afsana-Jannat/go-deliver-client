import React from "react";
import ServiceCard from "./ServiceCard";
import * as Icons from "react-icons/fi";

const servicesData = [
    {
        icon: "FiTruck",
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
    },
    {
        icon: "FiMapPin",
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
    },
    {
        icon: "FiPackage",
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
    },
    {
        icon: "FiDollarSign",
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
    },
    {
        icon: "FiHome",
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support."
    },
    {
        icon: "FiRefreshCcw",
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
    }
];



const ServicesSection = () => {
    return (
        <section className="py-16 bg-[#0d3052] rounded-lg mb-8">
            <div className="container mx-auto px-4 text-center">

                <h2 className="text-4xl text-[#f9fcff] font-bold mb-3">Our Services</h2>
                <p className="max-w-2xl mx-auto text-gray-100 mb-10">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => {
                        const IconComponent = Icons[service.icon];

                        return (
                            <ServiceCard
                                key={index}
                                icon={
                                    <IconComponent
                                        className="text-3xl font-extrabold"
                                        style={{ color: "#103963" }}
                                    />
                                }
                                title={service.title}
                                description={service.description}
                            />
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
