import { Routes as Switch, Route } from "react-router-dom";
import {
  CadastroMed,
  Doctor,
  Home,
  Login,
  Profile,
  RedefinePassword,
  Register,
} from "../screens";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro-paciente" element={<Register />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/redefinicao-de-senha" element={<RedefinePassword />} />
      <Route path="/cadastro-medico" element={<CadastroMed />} />
      <Route path="/doutor" element={<Doctor />} />
      <Route path="/perfil-medico" element={<Profile />} />
    </Switch>
  );
}
