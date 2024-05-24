/* eslint-disable no-unused-vars */
import React from "react";
import "../components/Formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <h2>Crear Receta</h2>
      <form>
        <div className="campo">
          <label htmlFor="titulo">Título:</label>
          <input className="input-text" type="text" id="titulo" />
        </div>
        <div className="campo">
          <label htmlFor="ingredientes">Ingredientes:</label>
          <textarea id="ingredientes" />
        </div>
        <div className="campo">
          <label htmlFor="pasos">Pasos:</label>
          <textarea id="pasos" />
        </div>
        <div className="campo">
          <label htmlFor="imagen">Imagen:</label>
          <input type="file" id="imagen" />
        </div>
        <button type="submit">Crear Receta</button>
      </form>
    </div>
  );
}
export default Formulario;
