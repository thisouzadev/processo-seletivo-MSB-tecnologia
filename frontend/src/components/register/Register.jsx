import React, { useState } from "react";
import "react-phone-number-input/style.css";
import RegisterService from "../../services/register.services";
import Error from "../../components/Error";
import "./register.css";
import AllRegister from "../allRegister/AllRegister";
function Register () {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [validTelefone, setValidTelefone] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const createRegister = () => {
    new RegisterService()
      .create(nome, email, telefone, mensagem)
      .catch((err) => {
        // setError(true);
        setMessageError(err.message);
        console.log("ERRO -> ", err);
      });
  };

  const handleButton = (event) => {
    event.preventDefault();
    createRegister();
    setError(false);
  };

  const getValidateEmail = ({ target: { value } }) => {
    const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validaEmail.test(value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    setEmail(value);
  };

  const getValidateTelefone = ({ target: { value } }) => {
    const validaTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
    if (validaTelefone.test(value)) {
      setValidTelefone(true);
    } else {
      setValidTelefone(false);
    }
    setTelefone(value);
  };

  const submit = () => {
    if (validEmail && validTelefone) return false;
    return true;
  };

  return (
    <>
      <form className='register' method="post" action="" >
        <label>
        Nome:
          <input type="text" onChange={ (event) => setNome(event.target.value)} name="Nome" />
        </label>
        <label>
        email:
          <input type="email" onChange={ (event) => getValidateEmail(event)} name="email" />
        </label>
        <label>
      telefone:
          <input type="text" onChange={ (event) => getValidateTelefone(event)} name="telefone" />
        </label>
        <label>
        mensagem:
          <input type="text" onChange={ (event) => setMensagem(event.target.value)} name="mensagem" />
        </label>
        <input type="submit" disabled={submit()} onClick={handleButton} value="criar" />
        {error
          ? (
            <Error
              message={messageError}
            />
          )
          : (
            ""
          )}
      </form>
      <AllRegister />
    </>
  );
}

export default Register;
