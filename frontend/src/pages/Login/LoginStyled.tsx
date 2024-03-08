import styled from "styled-components";
import { Container, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TitleStyles = styled.h3`
	text-align: center;
`;

export const DescriptionStyles = styled.p`
	color: #f5f5f5;
	margin-top: 1rem;
	text-align: center;
`;

export const ContainerStyles = styled(Container)`
	max-width: 30rem;
	margin: 3rem auto;
	padding: 1.25rem;
	border-radius: 5px;
	color: #f5f5f5;
	min-height: 50vh;
`;

export const ButtonStyles = styled(Button)`
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
	background-color: #e41749;
	position: fixed;
	z-index: 9999;
	color: white;
	right: 2rem;
	top: 2rem;
`;

export const SuccessAlert = styled(Alert)`
	background-color: #30a14e;
	position: fixed;
	z-index: 9999;
	color: white;
	right: 2rem;
	top: 2rem;
`;

export const LinkStyles = styled(Link)`
	color: white;
	transition: color 0.3s;
	text-decoration: none;
	&:hover {
		color: #4d9bee;
	}
`;
