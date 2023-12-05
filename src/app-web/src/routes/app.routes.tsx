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
  const auth = window.localStorage.getItem("token");
  return (
    <Switch>
      <>
        <Route path="/inicio" element={!auth ? <Login /> : <Home />} />
        <Route path="/cadastro-medico" element={!auth ? <Login /> : <RegisterDoctor />} />
        <Route path="/doutor" element={!auth ? <Login /> : <Doctor />} />
        <Route path="/perfil-medico" element={!auth ? <Login /> : <Profile />} />

        <Route path="/redefinicao-de-senha" element={!auth ? <RedefinePassword /> : <Home />} />
        <Route path="/cadastro-paciente" element={!auth ? <Register /> : <Home />} />
        <Route path="/" element={!auth ? <Login /> : <Home />} />
      </>
    </Switch>
  );
}
