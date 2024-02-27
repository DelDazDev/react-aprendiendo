import "./App.css";
import ColorPicker from "./components/ColorPicker.jsx";
import Contador from "./components/Contador.jsx";
import DigitalClock from "./components/DigitalClock.jsx";
import Eventos from "./components/Eventos.jsx";
import List from "./components/List.jsx";
import OnChange from "./components/Onchange.jsx";
import ToDoList from "./components/ToDoList.jsx";
import UseEffect from "./components/UseEffect.jsx";
import UseState from "./components/UseState.jsx";
import UseContext from "./components/useContext/UseContext.jsx";
import UseRef from "./components/useRef.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];
  return (
    <div className="contenedor-principal">
      <h2>Recorriendo los Arrays</h2>
      <div className="container-arrays">
        {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
        {vegetables.length > 0 ? (
          <List items={vegetables} category="Vegetables" />
        ) : null}
      </div>
      <h2>Eventos</h2>
      <div className="container-eventos">
        <Eventos />
      </div>
      <h2>useState</h2>
      <div className="container-useState">
        <UseState />
      </div>
      <h2>Contador</h2>
      <div className="container-contador">
        <Contador />
      </div>
      <h2>onChange</h2>
      <div className="container-onchange">
        <OnChange />
      </div>
      <h2>Color Picker</h2>
      <div className="container-color">
        <ColorPicker />
      </div>
      <h2>To Do List</h2>
      <div className="container-todolist">
        <ToDoList />
      </div>
      <h2>useEffect</h2>
      <section className="container-useEffect">
        <UseEffect />
      </section>
      <section className="container__digitalClock">
        <DigitalClock />
      </section>
      <h2>useContext</h2>
      <section className="container__useContext">
        <UseContext />
      </section>
      <h2>useRef</h2>
      <section className="container__useRef">
        <UseRef />
      </section>
    </div>
  );
}

export default App;
