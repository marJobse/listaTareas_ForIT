# Challenge ingreso a Academia ForIT 2025

## Sumario

- [Challenge ingreso a Academia ForIT 2025](#challenge-ingreso-academia-ForIT)
  - [Introducción](#introducción)
  - [Indicaciones del proyecto](#indicaciones-del-proyecto)
  - [Configuración](#configuración)

## Introducción
Esta aplicacióm permite realizar operaciones CRUD sobre una lista de tareas, demostrando conocimientos fundamentales de Git, JavaScript, Node.js y React.
Utiliza un array en memoria como almacenamiento temporal

## Indicaciones del proyecto
- Consta de dos carpetas, una para el backend con Express y una para el frontend con React.
- Usa un array en memoria como almacenamiento temporal.
- Implementa manejo básico de errores.
- Implementa llamadas a la API de Express usando fetch.
- Configura variables de entorno tanto para la api como el frontend.
- Usa Bootstrap para los estilos.
- Utiliza la estructura recomendada para la tarea
  
```
interface Task{
 id: string,
title: string,
description: string,
completed: Date
}
```


## Configuración

Para ejecutar el proyecto localmente:

1. Cloná este repositorio `git clone https://github.com/marJobse/listaTareas_ForIT.git`
En cada carpeta (backend y frontend):
2. Configurar las variables de entorno, creando un archivo .env en la raíz de la 

```Backend
PORT=3002
```

```Frontend
REACT_APP_API_URL=http://localhost:3002/api/tasks
```
     
4. Instalar las dependencias con npm install
5. Ejecutar la aplicación con npm start


