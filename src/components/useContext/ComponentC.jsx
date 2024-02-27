import Rect, { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h2>Componente C</h2>
      <h3>{`Hola otra vez ${user}`}</h3>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
