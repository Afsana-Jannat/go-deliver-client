import React from 'react';

const BeMerchant = () => {
    return (
        <div
            className="hero  h-[420px] rounded-4xl mb-8"
            style={{
                backgroundImage:
                    "url(https://www.shutterstock.com/image-vector/white-truck-box-path-tracking-600nw-2490530993.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Optional overlay for text readability */}
            <div className="hero-overlay bg-white/50"></div>

            {/* Content section aligned fully to the left */}
            <div className="hero-content justify-start items-center w-full text-left">
                <div className="pl-0 ml-8">
                    <h1 className="mb-4 text-4xl font-bold text-[#103963]">
                        <span className="">Merchant and Customer</span>
                        <br /> Satisfaction is
                        <br /> Our First Priority
                    </h1>

                    <p className="mb-5 text-gray-700">
                        We offer the lowest delivery charge <br /> with the highest value
                        along with 100% safety of your product. <br /> Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>

                    <button className="btn mr-2 rounded-2xl bg-[#FF6F00] text-[#faf8f8] hover:bg-[#0d2d4d] hover:text-white">
                        Become a MerChant
                    </button>
                    <button className="btn btn-outline rounded-2xl text-[#0d2d4d] hover:bg-[#0d2d4d] hover:text-white">
                        Earn with Profast
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;
