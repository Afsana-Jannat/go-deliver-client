import React, { useEffect, useState, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import usePolling from "../../../hooks/usePolling";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

const TimelineRow = ({ item }) => {
    const time = item?.time ? new Date(item.time).toLocaleString() : new Date(item?.timestamp || item?.createdAt).toLocaleString();
    return (
        <div className="flex items-start gap-3 py-2 border-b">
            <div className="w-28 text-xs text-gray-500">{time}</div>
            <div className="flex-1">
                <div className="font-medium">{item.status?.replace?.("_", " ") ?? item.status ?? "Update"}</div>
                <div className="text-sm text-gray-600">{item.message ?? "—"}</div>
                <div className="text-xs text-gray-400 mt-1">By: {item.updated_by ?? item.updatedBy ?? "system"}</div>
            </div>
        </div>
    );
};

const ParcelTracking = () => {
    const { id } = useParams(); // parcel id
    const { user } = useContext(AuthContext);

    const [parcel, setParcel] = useState(null);
    const [timeline, setTimeline] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchParcel = useCallback(async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/parcels/${id}`);
            setParcel(res.data || null);
        } catch (err) {
            console.error("fetchParcel:", err);
        }
    }, [id]);

    const fetchTimeline = useCallback(async () => {
        try {
            // timeline route expects trackingId
            const trackingId = parcel?.tracking_id;
            if (!trackingId) return;
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/trackings/${trackingId}/logs`);
            // res.data is array of logs
            setTimeline(Array.isArray(res.data) ? res.data : res.data?.data ?? []);
        } catch (err) {
            console.error("fetchTimeline:", err);
        }
    }, [parcel]);

    // Poll parcel & timeline — parcel every 8s, timeline every 5s
    usePolling(async () => { await fetchParcel(); }, 8000, true);
    usePolling(async () => { await fetchTimeline(); }, 5000, !!parcel?.tracking_id);

    // initial load
    useEffect(() => {
        const load = async () => {
            setLoading(true);
            await fetchParcel();
            await fetchTimeline();
            setLoading(false);
        };
        load();
    }, [fetchParcel, fetchTimeline]);

    if (loading) return <p>Loading parcel tracking…</p>;
    if (!parcel) return <p>Parcel not found.</p>;

    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Parcel Tracking</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded">
                    <h3 className="font-medium">Parcel Info</h3>
                    <p><strong>Tracking ID:</strong> {parcel.tracking_id ?? "-"}</p>
                    <p><strong>Title:</strong> {parcel.title ?? "-"}</p>
                    <p><strong>Sender:</strong> {parcel.sender_name ?? parcel.created_by ?? "-"}</p>
                    <p><strong>Receiver:</strong> {parcel.receiver_name ?? "-"}</p>
                </div>

                <div className="p-4 border rounded">
                    <h3 className="font-medium">Status</h3>
                    <p className="text-lg font-bold capitalize">{parcel.delivery_status ? parcel.delivery_status.replace("_", " ") : "—"}</p>
                    <p className="text-sm text-gray-600">Payment: {parcel.payment_status ?? "—"}</p>
                    <p className="text-sm text-gray-600">Created: {parcel.createdAt ? new Date(parcel.createdAt).toLocaleString() : "-"}</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-3">Timeline</h3>
                <div className="border rounded p-3">
                    {timeline.length === 0 ? (
                        <p className="text-gray-500">No timeline events yet.</p>
                    ) : (
                        timeline.map((t) => <TimelineRow key={t._id || t.time || Math.random()} item={t} />)
                    )}
                </div>
            </div>
        </div>
    );
};

export default ParcelTracking;
