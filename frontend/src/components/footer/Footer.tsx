import styled from 'styled-components';

const FooterContainer = styled.footer`
 font-family: "Amiko", sans-serif;
 font-size:bold;
  background-color:  #333;
  padding: 20px;
  text-align: center;
`;

const StreamingEco = styled.div`
  color: white;;
  h3 {
    font-size: 1.5em;
  }
`;
const TeamInfo = styled.div`
  color: white;
  margin-top: 10px;
  p {
    margin: 0;
  }
`;
const RepositoryLink = styled.a`
  color:  white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const ResponsibleLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (

    <FooterContainer>
      <StreamingEco>
        <h3>2024 | Streaming Ecommerce ADA</h3>
      </StreamingEco>
      <TeamInfo>
        <ResponsibleLink href="https://github.com/RubensLFerreira"> Rubéns Lima |</ResponsibleLink>
        <ResponsibleLink href="https://github.com/JessanyKaline"> Jessany Kaline |</ResponsibleLink>
        <ResponsibleLink href="https://github.com/christianebs"> Christiane Barbosa |</ResponsibleLink>
        <ResponsibleLink href="https://github.com/GabrielaMoura25"> Gabriela Moura |</ResponsibleLink>
        <ResponsibleLink href="https://github.com/LeidyOlinto"> Leidy Olinto |</ResponsibleLink>
    
      </TeamInfo>
      <RepositoryLink href="">Repositório do Projeto</RepositoryLink>
    </FooterContainer>
     
  );
}

export default Footer;
