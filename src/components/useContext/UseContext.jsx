/* useContext() = React Hook que te permite compartir valores,
     entre múltiples niveles de componentes,
     sin pasar accesorios por cada nivel. */

import ComponentA from "./ComponentA";

function UseContext() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}

export default UseContext;
