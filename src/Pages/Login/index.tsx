import { FC } from "react";
import "./utils/login.css";
import { Link } from "react-router-dom";

const Login: FC = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <Link
            className="btnRegister"
            to="/Eventos"
            style={{ marginTop: "5%" }}
          >
            login
          </Link>
          <p className="message">
            Registrar-se <Link to="/Register">Criar Conta</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
