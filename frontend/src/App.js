import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import EditTaskForm from "./components/EditTaskForm";
import CreateTaskForm from "./components/CreateTaskForm";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#0d6efd" }} // azul Bootstrap moderno
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Este Challenge consigue lugar en la Academia ForIT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/obtenerTasks">
                  Lista de tareas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregarTask">
                  Agregar Tarea
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/obtenerTasks" element={<TaskList />} exact></Route>
          <Route path="/agregarTask" element={<CreateTaskForm />} exact></Route>
          <Route
            path="/editarTask/:id"
            element={<EditTaskForm />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
