import { QRCodeCanvas } from "qrcode.react";

const ParcelQRCode = ({ trackingId }) => {
    if (!trackingId) return null;

    return (
        <div className="text-center mt-4">
            <h3 className="font-bold mb-2">Parcel QR Code</h3>

            <QRCodeCanvas
                value={trackingId}
                size={180}
                level="H"
            />

            <p className="text-xs mt-2 text-gray-600">
                Tracking ID: {trackingId}
            </p>
        </div>
    );
};

export default ParcelQRCode;
