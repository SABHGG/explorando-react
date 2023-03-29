import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("incrementar");
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log("decrementar");
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setCount(0);
          console.log("resetear");
        }}
      >
        Reset
      </button>
    </div>
  );
}
