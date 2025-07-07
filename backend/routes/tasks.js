const express = require("express");
const router = express.Router();

const taskList = [
  {
    id: 1,
    title: "Crear repositorio en Github",
    descripcion: "1",
    completed: true,
    createdAt: "07/07/2025",
  },
  {
    id: 2,
    title: "Crear servidor basico con Express",
    descripcion: "2",
    completed: true,
    createdAt: "07/07/2025",
  },
  {
    id: 3,
    title: "Implementar endpoints CRUD",
    descripcion: "3",
    completed: false,
    createdAt: "07/07/2025",
  },
  {
    id: 4,
    title: "Crear api de REACT",
    descripcion: "4",
    completed: false,
    createdAt: "07/07/2025",
  },
];

// GET
router.get("/", (req, res) => res.send(taskList));

// POST
router.post("/", (req, res) => {
  console.log(req.body);
  const { id, title, descripcion } = req.body;
  const newTask = {
    id: id,
    title: title,
    descripcion: descripcion,
    completed: false,
    createdAt: Date.now(),
  };
  taskList.push(newTask);
  res.status(201).json(newTask);
});

// PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, descripcion, completed } = req.body;
  const task = taskList.find((t) => t.id === parseInt(id));
  if (task) {
    task.title = title ?? task.title;
    task.descripcion = descripcion ?? task.descripcion;
    task.completed = completed ?? task.completed;
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = taskList.length;
  const tasks = taskList.filter((t) => t.id !== parseInt(id));
  if (tasks.length < initialLength) {
    res.json({ message: "Tarea eliminada" });
  } else {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
});

module.exports = router;
