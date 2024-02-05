import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./components/Formulario";
function App() {
  return (
    <>
      <h1 className="text-center">
        Administrador Pacientes de Veterinaria
      </h1>
      <Container>
            <Formulario />
      </Container>
    </>
  );
}
export default App;
