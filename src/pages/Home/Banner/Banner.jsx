import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <div className="relative hero h-[400px]">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 rounded-md w-full h-full object-cover"
            >
                <source src="https://www.shutterstock.com/shutterstock/videos/3521299445/preview/stock-footage-delivery-service-flat-design-animation-a-courier-delivers-the-package-to-its-destination-and-hands.webm" type="video/webm" />
            </video>

            {/* Dark Overlay (optional) */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Hero Content */}
            <div className="hero-content text-neutral-content text-center relative">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-[#0d3052] font-bold">Fast and Reliable <span className="
                    text-[#FF6F00]">Courier</span> Service</h1>
                    <p className="mb-5 text-white">
                        Fast • Safe • Reliable | Your trusted parcel delivery partner 🚚✨
                        <br />
                        <br />
                        br
                        We deliver package quickly and efficiently, ensuring your parcels arrive safely and on time.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Banner;

// https://v1.pinimg.com/videos/mc/720p/7e/fc/50/7efc5098698e67ea3f5ed914070b9001.mp4

// https://www.shutterstock.com/shutterstock/videos/3521299445/preview/stock-footage-delivery-service-flat-design-animation-a-courier-delivers-the-package-to-its-destination-and-hands.webm