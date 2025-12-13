import axios from "axios";
import React, { useState } from "react";

const BookParcel = () => {
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [parcelId, setParcelId] = useState("");

    const handleBooking = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/parcels`, {
                customerName,
                customerPhone,
                parcelId
            });
            alert(res.data.message);
        } catch (err) {
            console.error(err);
            alert("Booking failed!");
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Book Parcel</h2>
            <input
                placeholder="Name"
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                className="input mb-2"
            />
            <input
                placeholder="Phone"
                value={customerPhone}
                onChange={e => setCustomerPhone(e.target.value)}
                className="input mb-2"
            />
            <input
                placeholder="Parcel ID"
                value={parcelId}
                onChange={e => setParcelId(e.target.value)}
                className="input mb-2"
            />
            <button onClick={handleBooking} className="btn btn-primary mt-2">
                Book Parcel
            </button>
        </div>
    );
};

export default BookParcel;
