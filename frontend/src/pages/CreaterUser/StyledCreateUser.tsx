import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledContainer = styled.div`
font-family: "Amiko", sans-serif;
max-width: 30rem;
margin: 0 auto;
margin-top: 3rem;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px
background-color: #fff;
color: #f5f5f5;
	;
`;

export const StyledLink = styled.div`
color: #f5f5f5
`;

export const Title = styled.h3`
  text-align: center;
  color: white;
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const ErrorAlert = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
`;

export const SuccessAlert = styled.div`
  color: #155724;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
`;

export const RegisterButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;