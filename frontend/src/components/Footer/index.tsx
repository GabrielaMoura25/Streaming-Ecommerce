import {
	FooterContainer,
	StreamingEco,
	TeamInfo,
	RepositoryLink,
	ResponsibleLink,
} from "./StyledFooter";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
	return (
		<FooterContainer>
			<StreamingEco>
				<h5>&copy; 2024 | Streaming TV</h5>
			</StreamingEco>
			<TeamInfo>
				<ResponsibleLink
					target="_blank"
					href="https://github.com/RubensLFerreira"
				>
					{" "}
					Rubens Lima |
				</ResponsibleLink>
				<ResponsibleLink
					target="_blank"
					href="https://github.com/JessanyKaline"
				>
					{" "}
					Jessany Kaline |
				</ResponsibleLink>
				<ResponsibleLink target="_blank" href="https://github.com/christianebs">
					{" "}
					Christiane Barbosa |
				</ResponsibleLink>
				<ResponsibleLink
					target="_blank"
					href="https://github.com/GabrielaMoura25"
				>
					{" "}
					Gabriela Moura |
				</ResponsibleLink>
				<ResponsibleLink target="_blank" href="https://github.com/LeidyOlinto">
					{" "}
					Leidy Olinto |
				</ResponsibleLink>
			</TeamInfo>
			<RepositoryLink
				target="_blank"
				href="https://github.com/GabrielaMoura25/Streaming-Ecommerce.git"
			>
				<FaGithub /> Repositório do Projeto
			</RepositoryLink>
		</FooterContainer>
	);
}
