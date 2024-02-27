import "../styles/Button.css";

function Button() {
  let count = 0;

  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} me tocaste ${count} veces`);
    } else {
      console.log(`${name} deja de tocarme`);
    }
  };

  const handleClick2 = (name) => alert(`${name}, eres un tontin`);

  const handleClick3 = (e) => console.log(e);

  const handleClick4 = (e) => (e.target.textContent = "Capullin");

  const handleClick5 = (e) => (e.target.textContent = "Doble Click");

  return (
    <div>
      <button onClick={() => handleClick("Mierda Seca")}>Click Me</button>
      <button onClick={() => handleClick2("Gualtrapillas")}>Click Me</button>
      <button onClick={(e) => handleClick3(e)}>Click Me</button>
      <button onClick={(e) => handleClick4(e)}>Me cambio</button>
      <button onDoubleClick={(e) => handleClick5(e)}>Doble Click</button>
    </div>
  );
}

export default Button;
