# Challenge ingreso a Academia ForIT 2025

## Sumario

- [Challenge ingreso a Academia ForIT 2025](#challenge-ingreso-academia-ForIT)
  - [Introducción](#introducción)
  - [Indicaciones del proyecto](#indicaciones-del-proyecto)
  - [Configuración](#configuración)
  - [Servidores](#servidores)

## Introducción
Esta aplicacióm permite realizar operaciones CRUD sobre una lista de tareas, demostrando conocimientos fundamentales de Git, JavaScript, Node.js y React.

## Indicaciones del proyecto
- Consta de dos carpetas, una para el backend con Express y una para el frontend con React.
- Utiliza un array en memoria como almacenamiento temporal.
- Implementa manejo básico de errores.
- Implementa llamadas a la API de Express usando fetch.
- Configura variables de entorno tanto para la api como el frontend.
- Utiliza Bootstrap para los estilos.
- Utiliza SweetAlert2 para las alertas.
- Utiliza la estructura recomendada para la tarea:
  
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
   
EN CADA CARPETA: 

2. Configurar las variables de entorno, creando un archivo .env en la raíz 

Backend
```
PORT=3002
```
Frontend
```
REACT_APP_API_URL=http://localhost:3002/api/tasks
```

3. Instalar las dependencias 
```
npm install
```

4. Ejecutar la aplicación 
```
npm start
```

## Servidores
- El backend estará corriendo en: http://localhost:3002
- El frontend estará corriendo en: http://localhost:3000


