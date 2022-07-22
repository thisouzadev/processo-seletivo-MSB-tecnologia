import React, { useState } from "react";
import "react-phone-number-input/style.css";
import RegisterService from "../../services/register.services";
import Error from "../../components/Error";
import "./register.css";
import AllRegister from "../allRegister/AllRegister";
function Register () {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
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
  console.log(nome, email, telefone, mensagem);
  return (
    <>
      <form className='register' method="post" action="" >
        <label>
        Nome:
          <input type="text" onChange={ (event) => setNome(event.target.value)} name="Nome" />
        </label>
        <label>
        email:
          <input type="email" onChange={ (event) => setEmail(event.target.value)} name="email" />
        </label>
        <label>
      telefone:
          <input type="text" onChange={ (event) => setTelefone(event.target.value)} name="telefone" />
        </label>
        <label>
        mensagem:
          <input type="text" onChange={ (event) => setMensagem(event.target.value)} name="mensagem" />
        </label>
        <input type="submit" onClick={handleButton} value="criar" />
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
