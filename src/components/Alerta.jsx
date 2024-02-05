import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Alerta = ({ children }) => {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          className="text-danger text-center"
        >
          {children}
        </Alert>
      ))}
    </>
  );
};

export default Alerta;
