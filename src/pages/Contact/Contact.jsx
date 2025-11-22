import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="b bg-white shadow-xl rounded-2xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row">

                {/* Left Side */}
                <div className="bg-[#1c5894] text-white p-8 md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                        <p className="text-gray-200 mb-6">
                            Feel free to reach out to us anytime. We are here to help you!
                        </p>

                        <div className="space-y-4">
                            <p className="flex items-center gap-3"><FiPhone /> +880 1234 567890</p>
                            <p className="flex items-center gap-3"><FiMail /> support@godeliver.com</p>
                            <p className="flex items-center gap-3"><FiMapPin /> Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-8">
                        <a href="#" className="hover:text-gray-200"><FiFacebook size={22} /></a>
                        <a href="#" className="hover:text-gray-200"><FiInstagram size={22} /></a>
                        <a href="#" className="hover:text-gray-200"><FiTwitter size={22} /></a>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Send Us a Message</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                            <input type="text" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400" placeholder="Enter your name" />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Email</label>
                            <input type="email" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400" placeholder="Enter your email" />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Message</label>
                            <textarea rows="4" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400" placeholder="Write your message..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#F7931E] text-white p-3 rounded-lg hover:bg-blue-700 font-semibold">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
