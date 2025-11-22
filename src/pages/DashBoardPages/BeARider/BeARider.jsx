import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import districtsData from "../../../../public/districtsData.json";
import useAuth from "../../../hooks/useAuth";


const BeARider = () => {
    const { user } = useAuth();
    const [selectedRegion, setSelectedRegion] = useState("");
    const { register, handleSubmit, reset } = useForm();

    // ✅ Unique region list
    const regions = [...new Set(districtsData.map((d) => d.region))];

    // ✅ Districts for selected region
    const filteredDistricts = districtsData.filter(
        (d) => d.region === selectedRegion
    );

    const onSubmit = async (data) => {
        data.status = "pending";
        data.created_at = new Date().toISOString();
        data.email = user?.email;

        try {
            const res = await fetch("http://localhost:5000/riders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                Swal.fire("Success!", "Your rider request has been submitted.", "success");
                reset();
                setSelectedRegion("");
            } else {
                Swal.fire("Error", "Failed to submit your request.", "error");
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Something went wrong.", "error");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                Become a Rider
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Rider Name */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        placeholder="Enter your age"
                        {...register("age", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Phone</label>
                    <input
                        type="text"
                        placeholder="+8801XXXXXXXXX"
                        {...register("phone", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* NID */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">NID Number</label>
                    <input
                        type="text"
                        placeholder="Enter your NID number"
                        {...register("nid", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Region */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Region</label>
                    <select
                        className="select select-bordered w-full"
                        {...register("region", { required: true })}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                        <option value="">Select Region</option>
                        {regions.map((region, idx) => (
                            <option key={idx} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                </div>

                {/* District */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">District</label>
                    <select
                        className="select select-bordered w-full"
                        {...register("district", { required: true })}
                        disabled={!selectedRegion}
                    >
                        <option value="">Select District</option>
                        {filteredDistricts.map((d, idx) => (
                            <option key={idx} value={d.district}>
                                {d.district}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Bike Brand */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Bike Brand</label>
                    <input
                        type="text"
                        placeholder="Enter your bike brand"
                        {...register("bike_brand", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Bike Registration */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Bike Registration Number</label>
                    <input
                        type="text"
                        placeholder="Enter registration number"
                        {...register("bike_registration", { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Note */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Additional Note</label>
                    <textarea
                        placeholder="Write something (optional)"
                        {...register("note")}
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn bg-[#FF6F00] hover:bg-[#e65f00] text-white w-full"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default BeARider;
