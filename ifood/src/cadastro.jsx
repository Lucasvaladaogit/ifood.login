import React from "react";
import "./App.css";
import { Link } from "react-router";

function Cadastro() {
  return (
    <>
      <div>
        Página 1
        <br />
        <Link to="/">Ir para o Login</Link>
      </div>
    </>
  );
}

export default Cadastro;