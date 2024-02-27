import React, { useState, useEffect } from "react";
// React Hook that tells React to DO THIS CODE WHEN:
// (pick one)
// This component re-renders
// This component mounts
// The state of a value changes

// useEffect(function, [dependencies])

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDER");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVE");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} * ${height}`;
  }, [width, height]);

  // Nos muestra el tamaño de la pantalla.
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount(count + 1);
  }

  function subtractCount() {
    setCount(count - 1);
  }

  function changeColor() {
    setColor((color) => (color === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
      <br />
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
};

export default UseEffect;
