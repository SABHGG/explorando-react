import React from "react";
import ReactDOM from "react-dom/client";
import { User } from "./User";
import { Button } from "./Button";
import { TaskCard } from "./Task";
/* import { Posts } from "./Posts"; */
import { Counter } from "./Counter";
import { Guardar } from "./Guardar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "SABHGG",
    image: "https://robohash.org/user",
  },
  {
    id: 2,
    name: "Ramon Perez",
    image: "https://robohash.org/user1",
  },
  {
    id: 3,
    name: "trapo",
    image: "https://robohash.org/user2",
  },
]; 


root.render(
  <>
    <Guardar />

     <Counter /> 

    {users.map((users, index) => {
      return (
        <div key={index}>
          <h1>{users.name}</h1>
          <img src={users.image} alt={users.name} />
        </div>
      );
    })}

    <TaskCard ready={true} />
    <Button text="alerta" name="SABHGG" />
    <User
      name="SABHGG"
      amount={1000}
      address={{ city: "Buenos Aires", country: "Argentina" }}
      phone="123456789"
      married={true}
    />
    <User
      name="Daniel Perez 😎"
      amount={100000000}
      address={{ city: "Cartajena", country: "Colombia" }}
      phone="987654321"
      married={false}
    />
    <Button text="💲💲💲💲💲💲💲💲💲💲💲💲💲💲💲💲💲" />
    <Button text="papulandia" />
    <Button text="hola mundoo" name="SABHGG" />

    <input
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("enviando formulario");
      }}
    >
      <h1>Registro de usuario</h1>
      <Button text="Enviar" />
    </form> 
  </>
);
