import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import {
	StyledContainer,
	LinkStyles,
	Title,
	Description,
	ErrorAlert,
	SuccessAlert,
} from "./styledCreateUser";

import { CreateUserServices } from "../../services/userServices";
import { IUser } from "../../interfaces/IUser";

const CreateUser: React.FC = () => {
	const navigate = useNavigate();

	const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

	const [formData, setFormData] = useState<IUser>({
		name: "",
		cpf: "",
		phone: "",
		gender: "",
		dueDate: new Date(),
		email: "",
		password: "",
		role: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			await CreateUserServices(formData);

			handleSuccess("Cliente cadastrado com sucesso!");
		} catch (error: any) {
			handleError(error.message);
		}
	};

	const handleError = (message: string) => {
    setErrorMessage(message);
    setTimeout(clearError, 2000);
  };

  const clearError = () => {
    setErrorMessage("");
  };

  const renderError = () => (
    <ErrorAlert key="danger" variant="danger">
      <Spinner animation="grow" size="sm" /> {errorMessage}
    </ErrorAlert>
  );

  const handleSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(clearSuccess, 2000);
  };

  const clearSuccess = () => {
    setSuccessMessage("");
		navigate('/');
  };

  const renderSuccess = () => (
    <SuccessAlert key="danger" variant="success">
      <Spinner animation="grow" size="sm" /> {successMessage}
    </SuccessAlert>
  );

	return (
		<StyledContainer className="card text-bg-dark">
			{errorMessage && renderError()}
      {successMessage && renderSuccess()}

			<LinkStyles to={'/'}>
				<FaArrowLeft />
			</LinkStyles>

			<Form onSubmit={handleSubmit}>
				<Title className="title-primary">Cadastra-se aqui</Title>

				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Nome</Form.Label>
					<Form.Control
						type="text"
						placeholder="Nome completo"
						name="name"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCPF">
					<Form.Label>CPF</Form.Label>
					<Form.Control
						type="text"
						placeholder="XXX.XXX.XXX-XX"
						name="cpf"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPhone">
					<Form.Label>Telefone</Form.Label>
					<Form.Control
						type="text"
						placeholder="(XX) XXXXX-XXXX"
						name="phone"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicGender">
					<Form.Label>Gênero</Form.Label>
					<Form.Select
						name="gender"
						onChange={handleChange}
						aria-label="Select gender"
					>
						<option value="hc">Masculino</option>
						<option value="mc">Feminino</option>
						<option value="o">Outros</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicdueDate">
					<Form.Label>Data de Nascimento</Form.Label>
					<Form.Control
						type="date"
						placeholder="DD/MM/YYYY"
						name="dueDate"
						onChange={handleChange}
					/>
				</Form.Group>

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

				<Form.Group className="mb-3" controlId="formBasicGender">
					<Form.Label>Cargo</Form.Label>
					<Form.Select
						name="role"
						onChange={handleChange}
						aria-label="Select gender"
					>
						<option value="client">Cliente</option>
					</Form.Select>
				</Form.Group>

				<Button
					style={{ width: "100%", marginTop: "1rem" }}
					variant="primary"
					type="submit"
				>
					Cadastrar
				</Button>

				<Description>
					Já possui uma conta? <LinkStyles to="/login">Login</LinkStyles>
				</Description>
			</Form>
		</StyledContainer>
	);
};

export default CreateUser;
