import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [dataTask, setdataTask] = useState([]); // para traer el objeto completo

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/obtenerTasks`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener las tareas");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setdataTask(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Mapear arreglo en objeto
  const listaTareas = dataTask.map((task) => {
    return (
      <div>
        <TaskItem task={task} />
      </div>
    );
  });

  return (
    <div>
      <br />
      <h4>Listado de tareas</h4>
      <br />
      {listaTareas}
    </div>
  );
}
export default TaskList;
