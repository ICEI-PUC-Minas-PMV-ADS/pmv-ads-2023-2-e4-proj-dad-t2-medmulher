import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/app.routes";
import "./App.css";
import { UserProvider } from "./contexts/userContext";
import { DoctorProvider } from "./contexts/doctorContext";

function App() {
  return (
    <>
      <DoctorProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </UserProvider>
      </DoctorProvider>
    </>
  );
}

export default App;
