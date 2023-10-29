import { Routes as Switch, Route } from "react-router-dom";
import {
  Doctor,
  Home,
  Login,
  Profile,
  RedefinePassword,
  Register,
} from "../screens";
import RegisterDoctor from "../screens/registerDoctor";

export default function Routes() {
  return (
    <Switch>
      {window.localStorage.getItem("token") ? (
        <>
          <Route path="/inicio" element={<Home />} />
          <Route path="/cadastro-medico" element={<RegisterDoctor />} />
          <Route path="/doutor" element={<Doctor />} />
          <Route path="/perfil-medico" element={<Profile />} />
        </>
      ) : (
        <>
          <Route path="/redefinicao-de-senha" element={<RedefinePassword />} />
          <Route path="/cadastro-paciente" element={<Register />} />
          <Route path="/" element={<Login />} />
        </>
      )}
    </Switch>
  );
}
