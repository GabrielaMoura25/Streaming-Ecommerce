import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerOneStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 30rem;
`;

export const ContainerTwoStyles = styled.div`
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

export const LinkStyles = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: white;
  transition: color 0.3s;
  &:hover {
    color: #4d9bee;
  }
`;
