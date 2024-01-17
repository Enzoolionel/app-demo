import React, { useState } from "react";
import InputComponent from "../components/inputComponent";
import { fetchData } from "../utils/fetchData.js";
import "../styles/formComponent.css";

const FormComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(undefined);

  const changenombre = (e) => {
    setNombre(e.target.value);
  };
  const changeApellido = (e) => {
    setApellido(e.target.value);
  };
  const changeEdad = (e) => {
    setEdad(e.target.value);
  };

  const obtenerDatos = async () => {
    try {
      const data = await fetchData("http://localhost:3000/api/data");
      console.log(data);
      return setDatos(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=".container__gral">
      <div className="container">
      <h1 className="container__titulo">Bienvenido</h1>
        <InputComponent
          id="nombre"
          classCampo="container__campo"
          classLabel="container__label"
          type="text"
          value={nombre}
          label="Nombre"
          onChange={changenombre}
        />
        <InputComponent
          id="apellido"
          classCampo="container__campo"
          classLabel="container__label"
          type="text"
          value={apellido}
          label="apellido"
          onChange={changeApellido}
        />
        <InputComponent
          id="edad"
          classCampo="container__campo"
          classLabel="container__label"
          type="number"
          value={edad}
          label="Edad"
          onChange={changeEdad}
        />
        <button className="container__button">Button</button>
      </div>
    </div>
  );
};

export default FormComponent;
