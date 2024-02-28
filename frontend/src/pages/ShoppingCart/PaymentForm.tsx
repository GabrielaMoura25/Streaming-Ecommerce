import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";

import { ErrorAlert, SuccessAlert, StyledForm } from "./PaymentStyled";

import { paymentService } from "../../services/paymentService";

import "./cardElement.css";

const PaymentForm = () => {
	const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setLoading(true);

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement!,
		});

		setLoading(false);

		if (error) {
			console.log("[error]", error);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
		}

		try {
			await paymentService({
				amount: 2000,
				token: paymentMethod,
			});

			setTimeout(() => {
				setSuccessMessage("");
				navigate("/");
			}, 2000);

			setSuccessMessage("Pagamento realizado com sucesso!");
		} catch (error: any) {
			setTimeout(() => {
				setErrorMessage("");
			}, 2000);
			setErrorMessage(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<StyledForm onSubmit={handleSubmit}>
			<h3 style={{ textAlign: "center" }}>Finalizar compras</h3>
			<div style={{ height: "5rem", margin: "2rem auto" }}>
				<p>Quantidade de Itens: 4</p>
				<h3>Valor total: R$ 220.20</h3>
			</div>

			<CardElement className="card-element" />
			<Button
				style={{ marginTop: "1rem", width: "100%" }}
				variant="primary"
				type="submit"
				disabled={!stripe || loading}
			>
				{loading ? "Processando..." : "Finalizar Compra"}
			</Button>

			<Link to={"/"}>
				<Button
					style={{ margin: "1rem auto 2rem auto", width: "100%" }}
					variant="outline-danger"
				>
					Cancelar
				</Button>
			</Link>

			{errorMessage && (
				<ErrorAlert key="danger" variant="danger">
					{errorMessage}
				</ErrorAlert>
			)}

			{successMessage && (
				<SuccessAlert key="success" variant="success">
					{successMessage}
				</SuccessAlert>
			)}
		</StyledForm>
	);
};
export default PaymentForm;
