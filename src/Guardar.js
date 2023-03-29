import { useState, useEffect } from "react";

export function Guardar() {
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        console.log("render");
    }, []);


    return (
      <div>
        <input onChange={e => setMensaje(e.target.value)} />
        <button onClick={() => {
          alert("el mensaje es: " + mensaje);
        }}>save</button>
      </div>
    )
}