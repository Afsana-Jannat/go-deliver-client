

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-xl shadow-md 
        hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center
         hover:bg-[#e0eaf1]">

            {/* Icon inside circle */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#103963]/10 mb-4">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg text-blue-950 font-semibold mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-500 text-sm">{description}</p>
        </div>
    );
};

export default ServiceCard;

