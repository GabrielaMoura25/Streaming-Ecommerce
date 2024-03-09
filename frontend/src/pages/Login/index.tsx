import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Spinner } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";

import {
  TitleStyles,
  ContainerStyles,
  DescriptionStyles,
  ErrorAlert,
  SuccessAlert,
  LinkStyles,
} from "./LoginStyled";

import { login } from "../../services/loginService";
import { ILogin } from "../../interfaces/ILogin";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState<ILogin>({
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
        setErrorMessage("Por favor, preencha todos os campos.");
      }

      await login(formData);

      handleSuccess("Usuário logado com sucesso");
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
    <ContainerStyles className="card text-bg-dark">
      {errorMessage && renderError()}
      {successMessage && renderSuccess()}

      <LinkStyles to="/">
        <FaArrowLeftLong />
      </LinkStyles>

      <Form onSubmit={handleSubmit}>
        <TitleStyles className="title-primary">Login</TitleStyles>

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

        <DescriptionStyles>
          Não possui conta?{" "}
          <LinkStyles to="/user/register">Crie um cadastro</LinkStyles>
        </DescriptionStyles>
      </Form>
    </ContainerStyles>
  );
};

export default Login;
