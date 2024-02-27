import { useState } from "react";

function UseState() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Hominido");
  };

  const subirEdad = () => {
    setAge(age + 1);
  };

  const toggleEmployesStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Como me llamo</button>
      <hr />
      <p>Age: {age}</p>
      <button onClick={subirEdad}>Subir años</button>
      <hr />
      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployesStatus}>Toggle Status</button>
    </div>
  );
}

export default UseState;
