import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./utils/register.css";
const Register: FC = () => {
  //   const [register, setRegister] = useState();

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Nome" />
          <input type="number" placeholder="CPF" />
          <input type="password" placeholder="Senha" />
          <Link className="btnRegister" to="/Login">
            Registrar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
