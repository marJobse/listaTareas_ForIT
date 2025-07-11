import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";

function TaskList() {
  const [dataTask, setdataTask] = useState([]); // para traer el objeto completo

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/obtenerTasks`)
      .then((res) => {
        console.log(res.data);
        setdataTask(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Mapear listaproducto en objeto producto
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
