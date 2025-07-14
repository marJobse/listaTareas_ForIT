const express = require("express");
const router = express.Router();

const taskList = [
  {
    id: 1,
    title: "Crear repositorio en Github",
    descripcion: "1",
    completed: true,
    createdAt: "2025-07-08",
  },
  {
    id: 2,
    title: "Crear servidor basico con Express",
    descripcion: "2",
    completed: true,
    createdAt: "2025-07-08",
  },
  {
    id: 3,
    title: "Implementar endpoints CRUD",
    descripcion: "3",
    completed: true,
    createdAt: "2025-07-08",
  },
  {
    id: 4,
    title: "Crear api de REACT",
    descripcion: "4",
    completed: false,
    createdAt: "2025-07-08",
  },
];

//http://localhost:3002/api/tasks/

//GET
router.get("/obtenerTasks", (req, res) => {
  try {
    console.log(taskList);
    res.send(taskList); // lista de tareas
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/obtenerTask/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = taskList.find((t) => t.id === id); // tarea por id

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

// POST
router.post("/", (req, res) => {
  try {
    const { id, title, descripcion } = req.body; // campos que se ingresan con valor. los demas tienen valor por defecto
    const newTask = {
      id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1,
      title,
      descripcion,
      completed: false,
      createdAt: new Date().toISOString().split("T")[0],
    };
    taskList.push(newTask); // agrega la tarea al arreglo
    res.status(201).json("Task creado correctamente", { newTask });
  } catch (error) {
    res.status(400).send("Se produjo error al crear el task.");
  }
});

// PUT
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { title, descripcion, completed, createdAt } = req.body;
    const task = taskList.find((t) => t.id === parseInt(id)); // busca tarea con ese id
    if (task) {
      // si existe esa tarea, edita los campos (excepto id)
      // el id es lo unico que no se edita
      task.title = title ?? task.title;
      task.descripcion = descripcion ?? task.descripcion;
      task.completed = completed ?? task.completed;
      task.descripcion = descripcion ?? task.descripcion;
      task.createdAt = createdAt ?? task.createdAt;
      res.json(task);
    } else {
      // si no existe tarea
      res.status(404).json({ error: "Tarea no encontrada." });
    }
  } catch (error) {
    res.status(500).send("Error al actualizar el task.");
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const position = taskList.findIndex((task) => task.id === id); // busca la tarea por id
    if (position !== -1) {
      // si el resultado de la busqueda no es -1, entonces la tarea se encontro
      taskList.splice(position, 1); // elimina el task en la posicion del arreglo "position"
      res.send("Tarea eliminada correctamente.");
    } else {
      res.status(404).send(`La tarea de id:  ${id} no fue encontrada`); // la tarea no se encontro
    }
  } catch (error) {
    res.status(500).send("Error al borrar el task");
  }
});

module.exports = router;
