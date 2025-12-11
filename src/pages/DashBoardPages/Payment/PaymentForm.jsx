// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { useQuery } from '@tanstack/react-query';
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import useAuth from '../../../hooks/useAuth';
// import Swal from 'sweetalert2';

// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const { parcelId } = useParams();
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();
//     const navigate = useNavigate();

//     const [error, setError] = useState('');


//     const { isPending, data: parcelInfo = {} } = useQuery({
//         queryKey: ['parcels', parcelId],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`${import.meta.env.VITE_BASE_URL}/parcels/${parcelId}`);
//             return res.data;
//         }
//     })

//     if (isPending) {
//         return '...loading'
//     }

//     console.log(parcelInfo)
//     const amount = parcelInfo.totalCost;
//     const amountInCents = amount * 100;
//     console.log(amountInCents);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!stripe || !elements) {
//             return;
//         }

//         const card = elements.getElement(CardElement);

//         if (!card) {
//             return;
//         }

//         // step- 1: validate the card
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })

//         if (error) {
//             setError(error.message);
//         }
//         else {
//             setError('');
//             console.log('payment method', paymentMethod);

//             // step-2: create payment intent
//             const res = await axiosSecure.post('/create-payment-intent', {
//                 amountInCents,
//                 parcelId
//             })

//             const clientSecret = res.data.clientSecret;

//             // step-3: confirm payment
//             const result = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: elements.getElement(CardElement),
//                     billing_details: {
//                         name: user.displayName,
//                         email: user.email
//                     },
//                 },
//             });

//             if (result.error) {
//                 setError(result.error.message);
//             } else {
//                 setError('');
//                 if (result.paymentIntent.status === 'succeeded') {
//                     console.log('Payment succeeded!');
//                     const transactionId = result.paymentIntent.id;
//                     // step-4 mark parcel paid also create payment history
//                     const paymentData = {
//                         parcelId,
//                         email: user.email,
//                         amount,
//                         transactionId: transactionId,
//                         paymentMethod: result.paymentIntent.payment_method_types
//                     }

//                     const paymentRes = await axiosSecure.post('/payments', paymentData);
//                     if (paymentRes.data.insertedId) {

//                         // ✅ Show SweetAlert with transaction ID
//                         await Swal.fire({
//                             icon: 'success',
//                             title: 'Payment Successful!',
//                             html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
//                             confirmButtonText: 'Go to My Parcels',
//                         });

//                         // ✅ Redirect to /myParcels
//                         navigate('/dashboard/myParcels');

//                     }
//                 }
//             }
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl
//              shadow-md w-full max-w-md mx-auto">
//                 <CardElement className="p-2 border rounded">
//                 </CardElement>
//                 <button
//                     type='submit'
//                     className="btn btn-primary text-black w-full"
//                     disabled={!stripe}
//                 >
//                     Pay ${amount}
//                 </button>
//                 {
//                     error && <p className='text-red-500'>{error}</p>
//                 }
//             </form>
//         </div>
//     );
// };

// export default PaymentForm;


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { parcelId } = useParams();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const { isPending, data: parcelInfo = {} } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    });

    if (isPending) {
        return '...loading';
    }

    const amount = parcelInfo.totalCost;
    const amountInCents = amount * 100;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        // 1️⃣ Validate card
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            return;
        }
        setError('');

        // 2️⃣ Create payment intent
        const res = await axiosSecure.post('/create-payment-intent', {
            amountInCents,
            parcelId
        });

        const clientSecret = res.data.clientSecret;

        // 3️⃣ Confirm payment
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: user.displayName,
                    email: user.email
                },
            },
        });

        if (result.error) {
            setError(result.error.message);
            return;
        }

        if (result.paymentIntent.status === 'succeeded') {
            const transactionId = result.paymentIntent.id;

            // 4️⃣ Save payment history
            const paymentData = {
                parcelId,
                email: user.email,
                amount,
                transactionId,
                paymentMethod: result.paymentIntent.payment_method_types
            };

            const paymentRes = await axiosSecure.post('/payments', paymentData);

            if (paymentRes.data.insertedId) {

                // -----------------------------------------------------------------
                // 5️⃣ ⭐ ADD TRACKING EVENT: Payment Completed
                // -----------------------------------------------------------------
                const trackingData = {
                    tracking_id: parcelInfo.tracking_id,
                    parcel_id: parcelId,
                    status: "paid",
                    message: "Customer has paid for the parcel",
                    updated_by: user.email
                };

                try {
                    await axiosSecure.post("/trackings", trackingData);
                    console.log("🔵 Payment tracking added successfully");
                } catch (err) {
                    console.error("❌ Tracking insert failed:", err);
                }
                // -----------------------------------------------------------------

                // 6️⃣ Show success popup
                await Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful! 🎉',
                    html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                    confirmButtonText: 'Go to My Parcels',
                });

                // Redirect
                navigate('/dashboard/myParcels');
            }
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
            >
                <CardElement className="p-2 border rounded" />
                <button
                    type="submit"
                    className="btn btn-primary text-white w-full"
                    disabled={!stripe}
                >
                    Pay ৳{amount}
                </button>

                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default PaymentForm;
