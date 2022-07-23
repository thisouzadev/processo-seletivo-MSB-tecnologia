import React, { useState } from "react";
import "react-phone-number-input/style.css";
import Error from "../../components/Error";
import "./register.css";
import AllRegister from "../allRegister/AllRegister";
import axios from "axios";

function Register () {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [validTelefone, setValidTelefone] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [validFile, setValidFile] = useState(false); // validar arquivo
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  console.log(nome, email, telefone, mensagem, selectedFile);
  const handleButton = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("nome", nome);
    data.append("email", email);
    data.append("telefone", telefone);
    data.append("mensagem", mensagem);
    data.append("file", selectedFile);
    await axios.post("http://localhost:3000/register", data);
  };

  const getValidateEmail = ({ target: { value } }) => {
    const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validaEmail.test(value)) {
      setValidEmail(true);
      setMessageError("entre com um email valido");
    } else {
      setValidEmail(false);
    }
    setEmail(value);
  };

  const getValidateTelefone = ({ target: { value } }) => {
    const validaTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
    if (validaTelefone.test(value)) {
      setValidTelefone(true);
      setMessageError("entre com um telefone valido");
    } else {
      setValidTelefone(false);
    }
    setTelefone(value);
  };

  const getValidateFile = (event) => {
    const validaFile = /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))(.txt|.TXT|.odt|.ODT|.docx|.DOCX|.doc|.DOC|.pdf|.PDF)$/;
    if (validaFile.test(event.target.value)) {
      setValidFile(true);
      setMessageError("entre com um arquivo valido");
    } else {
      setValidFile(false);
    }
    setSelectedFile(event.target.files[0]);
  };

  const submit = () => {
    if (validEmail && validTelefone && validFile) return false;
    return true;
  };

  return (
    <>
      <form onSubmit={handleButton} className='register' method="post" encType='multipart/form-data'>
        <label>
        Nome:
          <input type="text" value={nome} onChange={ (event) => setNome(event.target.value)} name="Nome" />
        </label>
        <label>
        email:
          <input type="email" value={email} onChange={ (event) => getValidateEmail(event)} name="email" />
        </label>
        <label>
      telefone:
          <input type="text" value={telefone} onChange={ (event) => getValidateTelefone(event)} name="telefone" />
        </label>
        <label>
        mensagem:
          <input type="text" value={mensagem} onChange={ (event) => setMensagem(event.target.value)} name="mensagem" />
        </label>
        <label>
        arquivo:
          <input type="file" onChange={ (event) => getValidateFile(event)}/>
        </label>
        <input type="submit"
          disabled={submit()}
          value="criar" />
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
