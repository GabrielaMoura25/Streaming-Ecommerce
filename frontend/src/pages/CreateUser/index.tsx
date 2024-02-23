import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

import {
	StyledContainer,
	StyledLink,
	Title,
	Description,
	ErrorAlert,
	SuccessAlert,
} from "./styledCreateUser";

import { CreateUserServices } from "../../services/createServices";

interface ICreateUserForm {
	name: string;
	cpf: string;
	phone: string;
	gender: string;
	dueDate: Date;
	email: string;
	password: string;
	role: string;
}

interface IDecodedToken {
	role: string;
}

const CreateUser: React.FC = () => {
	const navigate = useNavigate();
	const [userRole, setUserRole] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [formData, setFormData] = useState<ICreateUserForm>({
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
			if (!formData.name || !formData.email || !formData.password) {
				throw new Error("Por favor, preencha todos os campos obrigatórios.");
			}
			console.log(formData);

			await CreateUserServices(formData);

			setTimeout(() => {
				setSuccessMessage("");
				navigate("/");
			}, 2000);

			setSuccessMessage("Cliente cadastrado com sucesso!");
		} catch (error: any) {
			setTimeout(() => {
				setErrorMessage("");
			}, 2000);
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		const fetchToken = async () => {
			const token = localStorage.getItem("token");

			if (token) {
				const decodedToken: IDecodedToken = await jwtDecode(token);
				console.log(decodedToken);
				setUserRole(decodedToken.role);
			} else {
				throw new Error("Token ou cargo inválido");
			}
		};
		fetchToken();
	}, []);

	const verifyUserAdmin = () => {
		if (userRole === "admin") {
			return true;
		}
		return false;
	};

	return (
		<>
			{verifyUserAdmin() ? (
				<StyledContainer className="card text-bg-dark">
					<StyledLink onClick={() => navigate("/")}>
						<FaArrowLeft />
					</StyledLink>

					<Form onSubmit={handleSubmit}>
						<Title className="title-primary">Cadastro de Cliente</Title>

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
								<option value="">Gênero</option>
								<option value="hc">Homem Cis</option>
								<option value="ht">Homem Trans</option>
								<option value="mc">Mulher Cis</option>
								<option value="mt">Mulher Trans</option>
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
								<option value="">Selecione</option>
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
							Já possui uma conta?
							<StyledLink onClick={() => navigate("/login")}>Login</StyledLink>
						</Description>

						{errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}

						{successMessage && <SuccessAlert>{successMessage}</SuccessAlert>}
					</Form>
				</StyledContainer>
			) : (
				<StyledContainer className="card text-bg-dark">
					<h3
						style={{
							textAlign: "center",
							margin: "2rem 2rem",
							color: "#f5f5f5",
						}}
						className="title-primary"
					>
						Para cadastrar um novo cliente é necessário fazer login como
						administrador
					</h3>
					<p style={{ textAlign: "center" }}>
						Informações de Email e Senha de admin para teste:
					</p>
					<p style={{ textAlign: "center" }}>
						Email: <span style={{ color: "#fe6900" }}>admin@gmail.com</span>
						<br />
						Senha: <span style={{ color: "#fe6900" }}>123</span>
					</p>
				</StyledContainer>
			)}
		</>
	);
};

export default CreateUser;
