import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";

import useCart from "../useCart/useCart";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const stripePromise = loadStripe('pk_test_51NgMf2SJZsIhUwm5hf2j4uqPoMa1GXzvGS1GehTyzOkMsz3ew7HR5CC6grCO9Tntex43SnQUgj5547Pkvy4WmLyL00YBuFNBl8');

const Payment = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [transactionId, setTransactionId] = useState(null)
    const [cart] = useCart();
    const totalPrice = cart ? cart.reduce((total, item) => total + item.price, 0) : 0;
    useEffect(() => {
        if (totalPrice)
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ price: totalPrice }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
    }, [totalPrice]);

    const CheckOutForm = () => {

        const stripe = useStripe();
        const elements = useElements();

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                return;
            }
            const card = elements.getElement(CardElement);

            if (card == null) {
                return;
            }

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });

            if (error) {
                console.error('[error]', error);
                setErrorMessage(error.message);
                setSuccessMessage('')
            } else {
                setErrorMessage('');
                setSuccessMessage(transactionId)
                console.log('[PaymentMethod]', paymentMethod);
            }

            // Confirm Payment
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: user?.displayName,
                            email: user?.email,
                        },
                    },
                },
            );

            if (confirmError) {
                console.error(confirmError);
            } else {
                console.log('Success payment intent:', paymentIntent);
                console.log(paymentIntent.id);
                if(paymentIntent?.status === 'succeeded'){
                    setTransactionId(paymentIntent?.id)
                    const paymentInfo = {
                        email: user?.email,
                        price: totalPrice,
                        date: new Date(),
                        cardItems: cart.map(item => item._id),
                        transactionId: transactionId,
                        status: 'pending'
                    }
                    const res = await axiosSecure.post('/payment', paymentInfo)
                    console.log(res.data);
                }
            }
        }
        return (
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="px-10 my-10 text-white py-2 bg-blue-600 rounded" type="submit" disabled={!stripe || totalPrice < 1}>
                    Pay
                </button>
                <p className="text-red-600">{errorMessage}</p>
                <p className="text-green-600">{successMessage}</p>
               
                
            </form>
        );
    };

    return (
        <div>
            <div className="w-1/2 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
