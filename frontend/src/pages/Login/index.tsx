import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";

import {
	Title,
	StyledContainer,
	Description,
	ErrorAlert,
	SuccessAlert,
	StyledLink,
} from "./LoginStyled";

import { login } from "../../services/loginService";

interface ILoginForm {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const navigate = useNavigate();

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const [formData, setFormData] = useState<ILoginForm>({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			if (!formData.email || !formData.password) {
				throw new Error("Por favor, preencha todos os campos.");
			}

			await login(formData);

			setTimeout(() => {
				setSuccessMessage("");
				navigate("/");
			}, 2000);

			setSuccessMessage("Usuário logado com sucesso!");
		} catch (error: any) {
			setTimeout(() => {
				setErrorMessage("");
			}, 2000);
			setErrorMessage(error.message);
		}
	};
	return (
		<StyledContainer className="card text-bg-dark">
			<StyledLink to="/">
				<FaArrowLeftLong />
			</StyledLink>

			<Form onSubmit={handleSubmit}>
				<Title className="title-primary">Login</Title>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>E-mail</Form.Label>
					<Form.Control
						type="email"
						placeholder="...@gmail.com"
						name="email"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Senha</Form.Label>
					<Form.Control
						type="password"
						placeholder="***"
						name="password"
						onChange={handleChange}
					/>
				</Form.Group>

				<Button
					style={{ width: "100%", marginTop: "1rem" }}
					variant="primary"
					type="submit"
				>
					Login
				</Button>

				<Description>
					Não possui conta? <StyledLink to="/">Crie um cadastro</StyledLink>
				</Description>

				{errorMessage && (
					<ErrorAlert
						style={{ textAlign: "center" }}
						key="danger"
						variant="danger"
					>
						{errorMessage}
					</ErrorAlert>
				)}

				{successMessage && (
					<SuccessAlert
						style={{ textAlign: "center" }}
						key="success"
						variant="success"
					>
						{successMessage}
					</SuccessAlert>
				)}
			</Form>
		</StyledContainer>
	);
};

export default Login;
