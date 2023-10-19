import { Routes as Switch, Route } from "react-router-dom";
import Login from "../screens/login";
import Register from "../screens/register";
import Home from "../screens/home";
import RedefinePassword from "../screens/redefinePassword";
import CadastroMed from "../screens/registerDoctor";
import Doctor from "../screens/doctor";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro-paciente" element={<Register />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/redefinicao-de-senha" element={<RedefinePassword />} />
      <Route path="/cadastro-medico" element={<CadastroMed />} />
      <Route path="/doutor" element={<Doctor />} />
    </Switch>
  );
}
