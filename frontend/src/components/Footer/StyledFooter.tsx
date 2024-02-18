import styled from 'styled-components';

export const FooterContainer = styled.footer`
  font-family: "Amiko", sans-serif;
  font-size:bold;
  background-color:  #333;
  padding: 3.5rem;
  text-align: center;
`;

export const StreamingEco = styled.div`
  color: white;
  h3 {
    font-size: 1.5em;
  }
`;
export const TeamInfo = styled.div`
  color: white;
  margin-top: 0.6rem;
  p {
    margin: 0;
  }
`;
export const RepositoryLink = styled.a`
  color:  white;
  text-decoration: none;
  &:hover {
  text-decoration: underline;
  }
`;
export const ResponsibleLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;