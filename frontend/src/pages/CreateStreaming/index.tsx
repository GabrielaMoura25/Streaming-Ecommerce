import React, { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

import {
  StyledContainer,
  StyledLink,
  Title,
  ErrorAlert,
  SuccessAlert,
} from "./styledCreateUser";

import { RegisterStreaming } from "../../services/createStreaming";
import { IStreaming } from "../../interfaces/IStreaming";
import { IDecodedToken } from "../../interfaces/IDecodedToken";

const CreateStreaming: React.FC = () => {
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState("");
  const [userToken, setUserToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState<IStreaming>({
    title: "",
    description: "",
    value: "",
    photo: new File([""], "filename"),
    userId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, files } = e.target;
    if (type === "file") {
      if (files) {
        setFormData({
          ...formData,
          [name]: files[0],
        });
      }
    } else {
      const value = e.target.value;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await RegisterStreaming(formData, userToken);

      handleSuccess("Produto cadastrado com sucesso!");
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
    navigate("/");
  };

  const renderSuccess = () => (
    <SuccessAlert key="danger" variant="success">
      <Spinner animation="grow" size="sm" /> {successMessage}
    </SuccessAlert>
  );

  useEffect(() => {
    const fetchToken = async () => {
      const token: string | null = localStorage.getItem("token");
      setUserToken(token || "");

      if (token) {
        const decodedToken: IDecodedToken = await jwtDecode(token);
        setUserRole(decodedToken.role);
        setFormData({
          title: "",
          description: "",
          value: "",
          photo: new File([""], "filename"),
          userId: decodedToken.id,
        });
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
          {errorMessage && renderError()}
          {successMessage && renderSuccess()}

          <StyledLink onClick={() => navigate("/")}>
            <FaArrowLeft />
          </StyledLink>

          <Form onSubmit={handleSubmit}>
            <Title className="title-primary">Cadastro de Streaming</Title>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo do Streaming"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCPF">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descrição do Streaming"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="text"
                name="value"
                onChange={handleChange}
                placeholder="0,00"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Imagem de capa</Form.Label>
              <Form.Control type="file" name="photo" onChange={handleChange} />
            </Form.Group>

            <Button
              style={{ width: "100%", marginTop: "1rem" }}
              variant="primary"
              type="submit"
            >
              Cadastrar produto
            </Button>
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
            Para cadastrar um novo streaming é necessário fazer login como
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

export default CreateStreaming;
