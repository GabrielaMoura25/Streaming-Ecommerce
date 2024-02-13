import { Button } from "react-bootstrap";
import "./loguin.css";



interface LoguinProps {
  email: string;
  password: string;
  buttonLoguin: string;

}
function LoginPage( {email, password ,buttonLoguin}: LoguinProps) {
  return (
    <div className="container">
      <div className="email">E-mail <input></input> {email}</div>
      <div className="senha">Senha <input></input>{password}</div>
      <Button variant="primary">Entrar{buttonLoguin}</Button>
    </div>
  );
}
export default LoginPage;