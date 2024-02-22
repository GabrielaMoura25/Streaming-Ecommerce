import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { StyledContainer, StyledLink, Title, Description, ErrorAlert, SuccessAlert } from './styledCreateUser'

interface ICreateUserForm {
  name: string;
  cpf: string;
  phone: string;
  gender: string|undefined,
  dueDate: Date;
  email: string;
  password: string;
}

const CreateUser: React.FC = () => {
  const navigate = useNavigate();

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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("entrei aqui")
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

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            name="name"
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

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="(99) 99999-9999"
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Gênero</Form.Label>
          <Form.Select
            name="gender"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleChange(event)}
            aria-label="Select gender"
          >
            <option value="">Gênero</option>
            <option value="Homem Cis">Homem Cis</option>
            <option value="Homem Trans">Homem Trans</option>
            <option value="Mulher Cis">Mulher Cis</option>
            <option value="Mulher Trans">Mulher Trans</option>
            <option value="Outros">Outros</option>
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
            type="e-mail"
            placeholder="...@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Snha</Form.Label>
          <Form.Control
            type="password"
            placeholder="*"
            name="password"
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
        Já possui uma conta?<StyledLink onClick={() => navigate('/login')}>Login</StyledLink>
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