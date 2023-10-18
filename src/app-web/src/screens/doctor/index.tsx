import Header from "../../components/header";
import "../../styles/Doctor.css";
import { MdAdd, MdExpandMore } from "react-icons/md";

const Doctor = () => {
  return (
    <div className="Doctor">
      <Header />

      <div className="page">
        <div className="title">
          <h1>Central de Médicos</h1>
        </div>

        <div className="button-search">
          <button
            style={{
              background: "white",
              color: "black",
              border: "1px solid black",
              marginRight: "30px",
            }}
            type="submit"
            onClick={() => console.log("click")}
          >
            Especialidade{" "}
            <a href="#" className="navbar-icons3">
              <MdExpandMore />
            </a>
          </button>
          <button
            style={{
              background: "8D4698",
              color: "white",
              border: "1px solid black",
              marginRight: "250px",
            }}
            type="submit"
          >
            Cadastrar médico{" "}
            <a href="#" className="navbar-icons4">
              <MdAdd />
            </a>
          </button>
        </div>

        <div className="cards">

          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>

          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>

          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>

          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>
          
          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>

          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>

          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>

          <div className="card">
            <header>
              <img src="" alt="" />
            </header>
            <main>
              <h2>Dr Beatriz Silva</h2>
              <p>Ginecologista</p>
            </main>
            <footer>
              <button onClick={() => console.log("click")}>Ir para agenda</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
