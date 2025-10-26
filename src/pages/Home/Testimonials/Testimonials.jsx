import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
    const reviews = [
        {
            name: "Rasel Ahamed",
            position: "CTO, Shop360",
            review:
                "GoDeliver made our logistics smoother and faster. The real-time tracking feature is a game changer!",
        },
        {
            name: "Auwlad Hossain",
            position: "Senior Product Designer, ParcelLab",
            review:
                "Their fast delivery and support system are exceptional. I can rely on them for every project shipment.",
        },
        {
            name: "Nasir Uddin",
            position: "CEO, CityKart",
            review:
                "We’ve been using GoDeliver for a year — and customer satisfaction has improved significantly.",
        },
        {
            name: "Tanvir Hasan",
            position: "Owner, GadgetWorld",
            review:
                "Super easy to book and track deliveries. Highly recommended for eCommerce stores!",
        },
        {
            name: "Sadia Rahman",
            position: "Operations Manager, TrendyBD",
            review:
                "The team is very responsive and ensures safe, on-time deliveries every time.",
        },
        {
            name: "Rafiul Islam",
            position: "Founder, FoodXpress",
            review:
                "Their express delivery service saved us during peak hours. Very professional team!",
        },
        {
            name: "Nusrat Jahan",
            position: "Manager, FreshMart",
            review:
                "Affordable and reliable — GoDeliver truly understands business logistics.",
        },
        {
            name: "Imran Khan",
            position: "CEO, EcomTech",
            review:
                "Impressive support and timely updates. They handle our corporate parcels with great care.",
        },
        {
            name: "Mahmudul Hasan",
            position: "Logistics Head, BDStyle",
            review:
                "Loved their reverse logistics feature. It made product returns easier for our customers.",
        },
        {
            name: "Fahmida Khatun",
            position: "Owner, StyleHut",
            review:
                "Excellent service! My customers often praise how fast they receive their packages.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="my-16 px-6 md:px-20">
            <h2 className="text-3xl font-bold text-center text-[#103963] mb-2">
                What our customers are saying
            </h2>
            <p className="text-center text-gray-500 mb-8">
                Real feedback from real users — powering trust, speed, and satisfaction.
            </p>

            <Slider {...settings}>
                {reviews.map((item, index) => (
                    <div key={index} className="px-3">
                        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 h-64 flex flex-col justify-between">
                            <p className="text-gray-600 italic">“{item.review}”</p>
                            <div className="mt-4">
                                <div className="font-semibold text-[#103963]">
                                    {item.name}
                                </div>
                                <div className="text-sm text-gray-500">{item.position}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
