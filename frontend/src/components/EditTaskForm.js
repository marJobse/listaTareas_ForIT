import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditTaskForm() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [completed, setCompleted] = useState(false);
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/obtenerTask/${params.id}`
        );
        if (!res.ok) throw new Error("Error al obtener la tarea");
        const data = await res.json();
        setTitle(data.title);
        setDescripcion(data.descripcion);
        setCompleted(data.completed);
        setCreatedAt(data.createdAt);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTask();
  }, [params.id]);

  const actualizarTask = async () => {
    const updatedTask = {
      title,
      descripcion,
      completed,
      createdAt,
    };

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (!res.ok) throw new Error("Error al actualizar la tarea");
      Swal.fire("La tarea se edito exitosamente");
    } catch (err) {
      console.error(err);
      Swal.fire("Se produjo un error al editar la tarea");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar Producto</h2>
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

          <div className="mb-3">
            <label>Completado</label>
            <select
              className="form-control"
              value={completed}
              onChange={(e) => setCompleted(e.target.value === "true")}
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Fecha de creación</label>
            <input
              type="text"
              className="form-control"
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
            />
          </div>
          <button onClick={actualizarTask} className="btn btn-success">
            Guardar edición
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskForm;
