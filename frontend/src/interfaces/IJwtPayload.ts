import { JwtPayload } from "jwt-decode"

export interface IJwtPayload extends JwtPayload {
  id?: string;
  role?: string;
}