/*useState() = Vuelve a renderizar el componente cuando cambia el valor del estado.
useRef() = No provoca re-presentaciones cuando cambia su valor.
  1. Acceder/interactuar con elementos DOM
  2. Manejo del enfoque, animaciones y transiciones
  3. Gestión de temporizadores e intervalos*/
import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Componente Renderizado");
  });

  function handleClick() {
    setNumber((number) => number + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Clickeame</button>
    </div>
  );
}

export default UseRef;
