import { Button, Card, ListGroupItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Turno = ({ turno, eliminarTurno }) => {

    const { dueño, mascota, fecha, hora, sintomas } = turno
  return (
      <Card className="mt-3">
        <Card.Header>Dueño: {dueño}</Card.Header>

        <Card.Body>
          <Card.Title className="text-center display-5">
            Mascota: {mascota}
          </Card.Title>

          <Card.Text>
            <span className="fw-bold">Fecha:</span> {fecha}
          </Card.Text>

          <Card.Text>
            <span className="fw-bold">Hora:</span> {hora}
          </Card.Text>

          <Card.Text>
            <span className="fw-bold">Sintomas:</span> {sintomas}
          </Card.Text>

          <Button 
              variant="danger" 
              className="fw-bold"
              onClick={() => eliminarTurno(turno.id)}
          >
            Borrar Turno &times;
          </Button>
        </Card.Body>
      </Card>
  );
};

export default Turno;
