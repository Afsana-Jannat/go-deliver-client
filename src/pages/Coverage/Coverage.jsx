import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import districtsData from "../../../public/districtsData.json";

// ✅ Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// ✅ Small helper component for flyTo animation
const FlyToDistrict = ({ coords }) => {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 10, {
            duration: 2.5,
            easeLinearity: 0.25,
        });
    }
    return null;
};

const Coverage = () => {
    const [search, setSearch] = useState("");
    const [selectedCoords, setSelectedCoords] = useState(null);
    const mapRef = useRef();

    const handleSearch = () => {
        const district = districtsData.find(
            (d) => d.district.toLowerCase() === search.toLowerCase()
        );

        if (district) {
            setSelectedCoords([district.latitude, district.longitude]);
        } else {
            alert("District not found!");
        }
    };



    return (
        <div className="max-w-6xl mx-auto px-4 my-12">
            {/* Title */}
            <h1 className="text-3xl font-bold text-[#103963] text-center mb-4">
                We are available in 64 districts
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full overflow-hidden shadow-sm">
                    <input
                        type="text"
                        placeholder="🔍 Search a district..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-[#398adb] text-white px-6 py-2 font-semibold hover:bg-[#2a639c] transition"
                    >
                        Search
                    </button>
                </div>
            </div>

            <hr className="my-6" />

            {/* Subtitle */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                We deliver almost all over Bangladesh
            </h2>

            {/* Map Section */}
            <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                <MapContainer
                    center={[23.685, 90.3563]} // Bangladesh center
                    zoom={7}
                    scrollWheelZoom={true}
                    ref={mapRef}
                    style={{ height: "500px", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                    />

                    {/* ✅ FlyTo Component */}
                    {selectedCoords && <FlyToDistrict coords={selectedCoords} />}

                    {/* Markers */}
                    {districtsData.map((district, index) => (
                        <Marker
                            key={index}
                            position={[district.latitude, district.longitude]}
                        >
                            <Popup>
                                <h3 className="font-semibold text-lg">{district.district}</h3>
                                <p className="text-sm">Region: {district.region}</p>
                                <p className="text-sm">
                                    Areas: {district.covered_area.join(", ")}
                                </p>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;
