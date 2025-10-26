import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const clientsData = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];


const ClientsSection = () => {
    return (
        <section className="py-16 mb-6 bg-base-200">
            <div className="container mx-auto px-4 text-center">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6 text-[#103963]">
                    Trusted by Leading Businesses
                </h2>

                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Over 500+ companies rely on our logistics solutions for fast, safe, and secure delivery.
                </p>

                {/* Logo Marquee */}
                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    direction="left"
                    className="py-4"
                >
                    {clientsData.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-10 flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt={`Client logo ${index + 1}`}
                                className="w-32 h-auto opacity-80 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </Marquee>

            </div>
        </section>
    );
};

export default ClientsSection;
