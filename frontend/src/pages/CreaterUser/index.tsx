import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { StyledContainer, StyledLink, Title, Description, ErrorAlert, SuccessAlert } from './StyledCreateUser'


interface ICreateUserForm {
  nome: string;
  cpf: string;
  telefone: string;
  genero: string;
  dataNascimento: string;
  email: string;
  senha: string;
}

const CreateUser: React.FC = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState<ICreateUserForm>({
    nome: "",
    cpf: "",
    telefone: "",
    genero: "",
    dataNascimento: "",
    email: "",
    senha: "",
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
      if (!formData.nome || !formData.email || !formData.senha) {
        throw new Error("Por favor, preencha todos os campos obrigatórios.");
      }

      setTimeout(() => {
        setSuccessMessage("");
        navigate("/login");
      }, 2000);

      setSuccessMessage("Cliente cadastrado com sucesso!");
    } catch (error: any) {
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      setErrorMessage(error.message);
    }
  };

  return (
    <StyledContainer className="card text-bg-dark">
      <StyledLink onClick={() => navigate('/')}>
        <FaArrowLeft />
      </StyledLink>

      <Form onSubmit={handleSubmit}>
        <Title className="title-primary">Cadastro de Cliente</Title>

        <Form.Group className="mb-3" controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome completo"
            name="nome"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCPF">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="123.456.789-00"
            name="cpf"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTelefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="(99) 99999-9999"
            name="telefone"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGenero">
          <Form.Label>Gênero</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masculino/Feminino"
            name="genero"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDataNascimento">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="text"
            placeholder="DD/MM/AAAA"
            name="dataNascimento"
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

        <Form.Group className="mb-3" controlId="formBasicSenha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="***"
            name="senha"
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          style={{ width: "100%", marginTop: "1rem" }}
          variant="primary"
          type="submit"
        >
          Cadastrar
        </Button>

        <Description>
          Já possui uma conta? <StyledLink onClick={() => navigate('/login')}>Faça login</StyledLink>
        </Description>

        {errorMessage && (
          <ErrorAlert>
            {errorMessage}
          </ErrorAlert>
        )}

        {successMessage && (
          <SuccessAlert>
            {successMessage}
          </SuccessAlert>
        )}
      </Form>
    </StyledContainer>
  );
};

export default CreateUser;