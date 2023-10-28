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
import RegisterSchedule from "../screens/registerSchedule";
import RegisterDoctor from "../screens/registerDoctor";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<RegisterSchedule />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-paciente" element={<Register />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/redefinicao-de-senha" element={<RedefinePassword />} />
      <Route path="/cadastro-medico" element={<RegisterDoctor />} />
      <Route path="/doutor" element={<Doctor />} />
      <Route path="/perfil-medico" element={<Profile />} />
    </Switch>
  );
}
