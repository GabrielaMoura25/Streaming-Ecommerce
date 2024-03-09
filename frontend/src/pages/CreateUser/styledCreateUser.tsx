import { Button, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledContainer = styled.div`
	max-width: 30rem;
	margin: 3rem auto;
	padding: 1.25rem;
	border-radius: 5px;
	color: #f5f5f5;
	min-height: 50vh;
`;

export const LinkStyles = styled(Link)`
	color: white;
	transition: color 0.3s;
	text-decoration: none;
	&:hover {
		color: #4d9bee;
	}
`;

export const Title = styled.h3`
	text-align: center;
	color: white;
`;

export const Description = styled.p`
	text-align: center;
	margin-top: 10px;
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

export const RegisterButton = styled(Button)`
	width: 100%;
	margin-top: 1rem;
`;
