import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelQRCode from "./ParcelQRCode ";

const ParcelDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: parcel = {}, isLoading } = useQuery({
        queryKey: ["parcel-details", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-3">Parcel Details</h2>

            <p><b>Title:</b> {parcel.title}</p>
            <p><b>Type:</b> {parcel.type}</p>
            <p><b>Status:</b> {parcel.delivery_status}</p>
            <p><b>Payment:</b> {parcel.payment_status}</p>
            <p><b>Tracking ID:</b> {parcel.tracking_id}</p>

            {/* ✅ QR CODE */}
            <ParcelQRCode trackingId={parcel.tracking_id} />
        </div>
    );
};

export default ParcelDetails;
