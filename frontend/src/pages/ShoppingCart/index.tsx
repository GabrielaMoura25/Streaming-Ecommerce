import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
	import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY
);

export default function ShoppingCart() {
	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	);
}
