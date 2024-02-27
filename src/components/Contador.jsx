import "../styles/Contador.css";
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  const incremento = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="contador">
      <h2>{count}</h2>
      <button onClick={incremento}>Incremento</button>
      <button onClick={resta}>Resto</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Contador;
