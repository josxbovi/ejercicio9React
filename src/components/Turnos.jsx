import { ListGroup } from "react-bootstrap";
import Turno from "./Turno";
import 'bootstrap/dist/css/bootstrap.min.css';

const Turnos = ({ turnos, eliminarTurno }) => {

  const titulo = turnos.length === 0 ? "No hay turnos" : "Turnos Agendados";

  return (
    <>
      <ListGroup className="mt-3">
        <h2 className="text-center mb-2">{titulo}</h2>
        {turnos.map((turno) => (
          <Turno 
            key={turno.id} 
            turno={turno} 
            eliminarTurno={eliminarTurno} 
            />
        ))}
      </ListGroup>
    </>
  );
};

export default Turnos;
