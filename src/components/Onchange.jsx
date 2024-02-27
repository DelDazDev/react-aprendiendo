import { useState } from "react";
import "../styles/OnChange.css";

function OnChange() {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [comentario, setComentario] = useState("");
  const [pago, setPago] = useState("");
  const [envio, setEnvio] = useState("");

  function handleNombreChange(event) {
    setNombre(event.target.value);
  }

  function handleCantidadChange(event) {
    setCantidad(event.target.value);
  }

  function handleComentarioChange(event) {
    setComentario(event.target.value);
  }

  function handlePagoChange(event) {
    setPago(event.target.value);
  }

  function handleEnvioChange(event) {
    setEnvio(event.target.value);
  }

  return (
    <div>
      <input value={nombre} onChange={handleNombreChange} />
      <p>Nombre: {nombre}</p>
      <br />
      <input value={cantidad} onChange={handleCantidadChange} type="number" />
      <p>Cantidad: {cantidad}</p>
      <br />
      <textarea
        className="textArea"
        value={comentario}
        onChange={handleComentarioChange}
        cols="32"
        rows="8"
      />
      <p>Comentario: {comentario}</p>
      <br />
      <select value={pago} onChange={handlePagoChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Pago: {pago}</p>
      <br />
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={envio === "Pick Up"}
          onChange={handleEnvioChange}
        />
        Pick Up
      </label>{" "}
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={envio === "Delivery"}
          onChange={handleEnvioChange}
        />
        Delivery
      </label>
      <p>Envio: {envio}</p>
    </div>
  );
}

export default OnChange;
