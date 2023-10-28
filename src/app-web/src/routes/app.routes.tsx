import { Routes as Switch, Route } from "react-router-dom";
import Login from "../screens/login";
import Register from "../screens/register";
import Home from "../screens/home";
import RedefinePassword from "../screens/redefinePassword";
import Doctor from "../screens/doctor";
import RegisterDoctor from "../screens/registerDoctor/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro-paciente" element={<Register />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/redefinicao-de-senha" element={<RedefinePassword />} />
      <Route path="/cadastro-medico" element={<RegisterDoctor />} />
      <Route path="/doutor" element={<Doctor />} />
    </Switch>
  );
}
