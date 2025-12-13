import { useState } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

const PickupScan = () => {
    const [trackingId, setTrackingId] = useState("");
    const [loading, setLoading] = useState(false);
    const [scanned, setScanned] = useState(false);

    const handlePickup = async () => {
        if (!trackingId) return alert("Tracking ID not found!");

        setLoading(true);
        try {
            const res = await axios.patch(
                `${import.meta.env.VITE_BASE_URL}/pickup/${trackingId}`
            );

            if (res.data.matchedCount > 0) {
                alert("✅ Parcel picked up successfully!");
            } else {
                alert("❌ Pickup failed: Parcel not found or already picked up");
            }
        } catch (error) {
            console.error(error);
            alert("❌ Pickup failed due to server error");
        } finally {
            setLoading(false);
            setScanned(false); // allow scanning next parcel
        }
    };

    const handleScan = (data) => {
        if (data && !scanned) {
            setTrackingId(data);
            setScanned(true); // prevent multiple triggers
        }
    };

    const handleError = (err) => {
        console.error("QR Scan Error:", err);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded shadow max-w-sm w-full text-center">
                <h2 className="text-xl font-bold mb-4">📦 Scan Parcel QR Code</h2>

                {!scanned ? (
                    <div className="mb-4">
                        <QrReader
                            constraints={{ facingMode: "environment" }}
                            onResult={(result, error) => {
                                if (!result) handleScan(result?.text);
                                if (!error) handleError(error);
                            }}
                            className="w-full"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            Align the QR code inside the frame
                        </p>
                    </div>
                ) : (
                    <p className="mb-4">Scanned Tracking ID: <b>{trackingId}</b></p>
                )}

                <button
                    onClick={handlePickup}
                    className="btn btn-success w-full"
                    disabled={loading || !trackingId}
                >
                    {loading ? "Processing..." : "Confirm Pickup"}
                </button>
            </div>
        </div>
    );
};

export default PickupScan;
