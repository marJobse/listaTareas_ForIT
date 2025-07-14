import React, { useState } from "react";
import Swal from "sweetalert2";

function CreateTaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  async function crearTarea() {
    const tarea = {
      title,
      descripcion,
    };

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/`, {
        method: "POST", //
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea),
      });

      if (!res.ok) throw new Error("Error al crear la tarea");

      const resultado = await res.json();
      Swal.fire("La tarea se creo exitosamente");
      console.log(resultado);
    } catch (err) {
      console.error(err);
      Swal.fire("Se produjo un error al crear la tarea");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h4 className="mt-4">Crear Tarea</h4>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label>Título</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Descripción</label>
            <input
              type="text"
              className="form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <button onClick={crearTarea} className="btn btn-success">
            Guardar tarea
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskForm;
