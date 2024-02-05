import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Alerta from "./Alerta";
import Turnos from "./Turnos";

const Formulario = () => {
  let turnosStorage = JSON.parse(localStorage.getItem("turnos")) || [];
  const [turnos, setTurnos] = useState(turnosStorage);

  const eliminarTurno = (id) => {
    const actualizarTurnos = turnos.filter((turno) => turno.id !== id);
    setTurnos(actualizarTurnos);
  };

  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  const crearTurno = (turno) => {
    setTurnos([...turnos, turno]);
  };

  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const turno = {
    mascota: mascota,
    dueño: dueño,
    fecha: fecha,
    hora: hora,
    sintomas: sintomas,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([mascota, dueño, fecha, hora, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    turno.id = crypto.randomUUID();
    crearTurno(turno);
    setMascota("");
    setDueño("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              {error && <Alerta>Debes completar los campos</Alerta>}

              <Form.Group className="mb-2">
                <Form.Label>Nombre de Mascota</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="nombre de mascota"
                  value={mascota}
                  onChange={(e) => setMascota(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Nombre de dueño</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="nombre de dueño"
                  value={dueño}
                  onChange={(e) => setDueño(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Síntomas</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="describir sintomas"
                  value={sintomas}
                  onChange={(e) => setSintomas(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="fw-bold"
              >
                Agregar Turno
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <Turnos turnos={turnos} eliminarTurno={eliminarTurno} />
          </Col>
        </Row>
    </>
  );
};

export default Formulario;
