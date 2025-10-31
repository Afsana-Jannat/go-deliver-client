


import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import districtsData from "../../../public/districtsData.json";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const parcelType = watch("type");
    const senderRegion = watch("sender_region");
    const senderDistrict = watch("sender_district");
    const receiverRegion = watch("receiver_region");
    const receiverDistrict = watch("receiver_district");
    const weight = parseFloat(watch("weight") || 0);

    // 🔹 dynamic state
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [senderDistricts, setSenderDistricts] = useState([]);
    const [receiverDistricts, setReceiverDistricts] = useState([]);
    const [senderAreas, setSenderAreas] = useState([]);
    const [receiverAreas, setReceiverAreas] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    // 🔹 load unique regions
    useEffect(() => {
        const uniqueRegions = [...new Set(districtsData.map((d) => d.region))];
        setRegions(uniqueRegions);
        setDistricts(districtsData);
    }, []);

    // 🔹 filter sender districts when region selected
    useEffect(() => {
        if (senderRegion) {
            const filtered = districts.filter((d) => d.region === senderRegion);
            setSenderDistricts(filtered);
        } else setSenderDistricts([]);
    }, [senderRegion, districts]);

    // 🔹 filter receiver districts when region selected
    useEffect(() => {
        if (receiverRegion) {
            const filtered = districts.filter((d) => d.region === receiverRegion);
            setReceiverDistricts(filtered);
        } else setReceiverDistricts([]);
    }, [receiverRegion, districts]);

    // 🔹 update sender areas
    useEffect(() => {
        if (senderDistrict) {
            const found = districts.find((d) => d.district === senderDistrict);
            setSenderAreas(found?.covered_area || []);
        } else setSenderAreas([]);
    }, [senderDistrict, districts]);

    // 🔹 update receiver areas
    useEffect(() => {
        if (receiverDistrict) {
            const found = districts.find((d) => d.district === receiverDistrict);
            setReceiverAreas(found?.covered_area || []);
        } else setReceiverAreas([]);
    }, [receiverDistrict, districts]);

    // 🔹 Pricing Logic (Live Update)
    useEffect(() => {
        if (!parcelType || !senderDistrict || !receiverDistrict) {
            setTotalCost(0);
            return;
        }

        const isSameDistrict = senderDistrict === receiverDistrict;
        let cost = 0;

        if (parcelType === "document") {
            cost = isSameDistrict ? 60 : 80;
        } else if (parcelType === "non-document") {
            if (weight <= 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const extra = weight - 3;
                cost = isSameDistrict
                    ? 110 + extra * 40
                    : 150 + extra * 40 + 40;
            }
        }

        setTotalCost(cost);
    }, [parcelType, senderDistrict, receiverDistrict, weight]);

    // 🔹 Submit Handler with SweetAlert2
    const onSubmit = (data) => {
        if (!parcelType || !senderDistrict || !receiverDistrict) {
            toast.error("Please fill all parcel details to calculate cost.");
            return;
        }

        const isSameDistrict = senderDistrict === receiverDistrict;
        let baseCost = 0;
        let extraWeightCost = 0;
        let total = 0;
        let breakdown = "";

        if (parcelType === "document") {
            baseCost = isSameDistrict ? 60 : 80;
            total = baseCost;
            breakdown = `Parcel Type: Document\nBase Cost: ৳${baseCost}\nSame District: ${isSameDistrict ? "Yes" : "No"}`;
        } else if (parcelType === "non-document") {
            if (weight <= 3) {
                baseCost = isSameDistrict ? 110 : 150;
                total = baseCost;
                breakdown = `Parcel Type: Non-Document\nWeight: ${weight} kg\nBase Cost: ৳${baseCost}\nSame District: ${isSameDistrict ? "Yes" : "No"}`;
            } else {
                const extra = weight - 3;
                baseCost = isSameDistrict ? 110 : 150;
                extraWeightCost = extra * 40;
                if (!isSameDistrict) extraWeightCost += 40;
                total = baseCost + extraWeightCost;
                breakdown = `Parcel Type: Non-Document\nWeight: ${weight} kg\nBase Cost: ৳${baseCost}\nExtra for ${extra} kg: ৳${extra * 40}\n${!isSameDistrict ? "Outside District Extra: ৳40\n" : ""
                    }Same District: ${isSameDistrict ? "Yes" : "No"}`;
            }
        }

        Swal.fire({
            title: "Confirm Your Parcel",
            html: `
                <pre style="text-align:left;">${breakdown}</pre>
                <h3 style="color:green;">Total Price: ৳${total}</h3>
                <p>Do you want to proceed to payment?</p>
            `,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Proceed to Payment",
            cancelButtonText: "Go Back to Edit",
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const parcelData = {
                    ...data,
                    totalCost: total,
                    creation_date: new Date().toISOString(),
                };
                console.log("✅ Parcel saved:", parcelData);
                Swal.fire("Success!", "Parcel information saved successfully!", "success");
            } else {
                Swal.fire("Edit Your Parcel", "You can modify the details now.", "info");
            }
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-white shadow-xl p-10 rounded-3xl my-10 border border-gray-200">
            <Toaster position="top-center" reverseOrder={false} />

            {/* Title */}
            <h2 className="text-4xl font-extrabold text-center mb-3 text-gray-800">
                🚚 Send a Parcel
            </h2>
            <p className="text-center text-gray-500 mb-8">
                Fill out the details below for door-to-door delivery
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                {/* === Parcel Information === */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-2xl font-semibold mb-5 text-gray-700 border-b pb-2">Parcel Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="form-control w-full">
                            <label className="label font-medium text-gray-600">Type</label>
                            <select
                                {...register("type", { required: true })}
                                className="select select-bordered w-full bg-white"
                            >
                                <option value="">Select Type</option>
                                <option value="document">Document</option>
                                <option value="non-document">Non-document</option>
                            </select>
                            {errors.type && <span className="text-red-500 text-sm mt-1">Type is required.</span>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label font-medium text-gray-600">Title</label>
                            <input
                                type="text"
                                {...register("title", { required: true })}
                                placeholder="Parcel title"
                                className="input input-bordered w-full bg-white"
                            />
                            {errors.title && <span className="text-red-500 text-sm mt-1">Title is required.</span>}
                        </div>

                        {parcelType === "non-document" && (
                            <div className="form-control w-full">
                                <label className="label font-medium text-gray-600">Weight (kg)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    {...register("weight", { required: true })}
                                    placeholder="Enter weight"
                                    className="input input-bordered w-full bg-white"
                                />
                                {errors.weight && <span className="text-red-500 text-sm mt-1">Weight is required.</span>}
                            </div>
                        )}
                    </div>

                    {totalCost > 0 && (
                        <p className="text-center mt-5 text-xl font-bold text-green-700">
                            💰 Estimated Delivery Cost: ৳{totalCost}
                        </p>
                    )}
                </div>

                {/* === Sender Information === */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-2xl font-semibold mb-5 text-gray-700 border-b pb-2">Sender Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                {...register("sender_name", { required: true })}
                                defaultValue="Current User"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Contact</label>
                            <input
                                type="text"
                                {...register("sender_contact", { required: true })}
                                placeholder="01XXXXXXXXX"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Region</label>
                            <select
                                {...register("sender_region", { required: true })}
                                className="select select-bordered w-full bg-white"
                            >
                                <option value="">Select Region</option>
                                {regions.map((r) => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">District</label>
                            <select
                                {...register("sender_district", { required: true })}
                                className="select select-bordered w-full bg-white"
                            >
                                <option value="">Select District</option>
                                {senderDistricts.map((d) => (
                                    <option key={d.district} value={d.district}>{d.district}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Service Center</label>
                            <select
                                {...register("sender_center", { required: true })}
                                className="select select-bordered w-full bg-white"
                            >
                                <option value="">Select Area</option>
                                {senderAreas.map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label font-medium text-gray-600">Address</label>
                            <input
                                type="text"
                                {...register("sender_address", { required: true })}
                                placeholder="House, Road, Area"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label font-medium text-gray-600">Pickup Instruction</label>
                            <textarea
                                {...register("pickup_instruction")}
                                placeholder="Any special instructions?"
                                className="textarea textarea-bordered w-full bg-white"
                            />
                        </div>
                    </div>
                </div>

                {/* === Receiver Information === */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-2xl font-semibold mb-5 text-gray-700 border-b pb-2">Receiver Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                {...register("receiver_name", { required: true })}
                                placeholder="Receiver name"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Contact</label>
                            <input
                                type="text"
                                {...register("receiver_contact", { required: true })}
                                placeholder="01XXXXXXXXX"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Region</label>
                            <select
                                {...register("receiver_region", { required: true })}
                                className="select select-bordered w-full bg-white"
                            >
                                <option value="">Select Region</option>
                                {regions.map((r) => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">District</label>
                            <select
                                {...register("receiver_district", { required: true })}
                                className="select select-bordered w-full bg-white"
                            >
                                <option value="">Select District</option>
                                {receiverDistricts.map((d) => (
                                    <option key={d.district} value={d.district}>{d.district}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label font-medium text-gray-600">Service Center</label>
                            <select
                                {...register("receiver_center", { required: true })}
                                className="select select-bordered w-full bg-white"
                            >
                                <option value="">Select Area</option>
                                {receiverAreas.map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label font-medium text-gray-600">Address</label>
                            <input
                                type="text"
                                {...register("receiver_address", { required: true })}
                                placeholder="House, Road, Area"
                                className="input input-bordered w-full bg-white"
                            />
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label font-medium text-gray-600">Delivery Instruction</label>
                            <textarea
                                {...register("delivery_instruction")}
                                placeholder="Any delivery notes?"
                                className="textarea textarea-bordered w-full bg-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn text-white bg-[#296198] px-10 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        Submit Parcel
                    </button>
                </div>
            </form>
        </div>

    );
};

export default SendParcel;
