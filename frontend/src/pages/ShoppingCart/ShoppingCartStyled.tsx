import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 30rem;
`;

export const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 30rem;
`;

export const ContainerAlert = styled.div`
  background-color: #212529;
  margin: auto auto;
  color: white;
  text-align: center;
  padding: 7rem;
  border-radius: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: white;
  transition: color 0.3s;
  &:hover {
    color: #4d9bee;
  }
`;
