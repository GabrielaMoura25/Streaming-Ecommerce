import styled from "styled-components";
import { Container, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Title = styled.h3`
	text-align: center;
`;

export const StyledContainer = styled(Container)`
	max-width: 30rem;
	margin-top: 3rem;
	color: #f5f5f5;
	padding: 2rem;
	border-radius: 5px;
`;

export const Description = styled.p`
	color: #f5f5f5;
	margin-top: 1rem;
	text-align: center;
`;

export const StyledButton = styled(Button)`
	background-color: #007bff;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;

	&:hover {
		background-color: #0056b3;
	}
`;

export const ErrorAlert = styled(Alert)`
	background-color: #dc3545;
	color: white;
`;

export const SuccessAlert = styled(Alert)`
	background-color: #30a14e;
	color: white;
`;

export const StyledLink = styled(Link)`
	color: white;
	transition: color 0.3s;
	&:hover {
		color: #4d9bee;
	}
`;
