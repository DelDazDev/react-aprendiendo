import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Gualtrapillas");

  return (
    <div className="box">
      <h2>Componente A</h2>
      <h3>{`Hola ${user}`}</h3>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
