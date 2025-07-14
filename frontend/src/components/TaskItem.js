import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TaskItem({ task }) {
  async function borrarTask(id) {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al borrar");
      Swal.fire("La tarea se borro exitosamente");
    } catch (err) {
      console.error(err);
      Swal.fire("Error al borrar la tarea");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">Titulo: {task.title}</li>
            <li className="list-group-item">Descripcion: {task.descripcion}</li>
            <li className="list-group-item">
              Estado: {task.completed ? "Completada" : "Pendiente"}
            </li>
            <li className="list-group-item">
              Fecha de creacion: {task.createdAt}
            </li>
          </ul>
          <Link to={`/editartask/${task.id}`}>
            <li className="btn btn-success mt-2">Editar</li>
          </Link>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              borrarTask(task.id);
            }}
          >
            Borrar
          </button>
          <hr className="mt-4" />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
