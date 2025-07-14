# Challenge ingreso a Academia ForIT 2025 🚀🚀

## Sumario

- [Challenge ingreso a Academia ForIT 2025](#challenge-ingreso-academia-ForIT)
  - [Introducción](#introducción)
  - [Indicaciones del proyecto](#indicaciones-del-proyecto)
  - [Configuración](#configuración)
  - [Servidores](#servidores)
  - [Screenshots del CRUD en funcionamiento](#screenshots-del-crud-en-funcionamiento)
  - [Programadora del proyecto](#programadora-del-proyecto)

## 📖 Introducción 
Esta aplicacióm permite realizar operaciones CRUD sobre una lista de tareas, demostrando conocimientos fundamentales de Git, JavaScript, Node.js y React.

## 🔍 Indicaciones del proyecto  
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


## Configuración ⚙️

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

## Servidores 🖥️
- El backend estará corriendo en: http://localhost:3002
- El frontend estará corriendo en: http://localhost:3000

## Screenshots del CRUD en funcionamiento

## Create ➕

<img width="735" height="557" alt="image" src="https://github.com/user-attachments/assets/7d712f51-d18c-4d4d-881d-1c7b43fca2e8" />
<img width="728" height="670" alt="image" src="https://github.com/user-attachments/assets/d3336550-eb74-4ad7-bcd9-238e70612e5c" />

## Read 📝

<img width="777" height="950" alt="image" src="https://github.com/user-attachments/assets/c440a98f-2854-49b8-a9a7-1f4706ce33c0" />

## Update 🔄

<img width="795" height="753" alt="image" src="https://github.com/user-attachments/assets/322f2e84-bda2-441a-a106-481ce567f1ba" />
<img width="800" height="750" alt="image" src="https://github.com/user-attachments/assets/9d5cb229-014a-4875-9669-6eba01554db3" />

## Delete 🗑️

<img width="808" height="932" alt="image" src="https://github.com/user-attachments/assets/f9ccb6c3-c63c-47f9-8707-f541e986c2ef" />

## Programadora del proyecto ✨
Soy Mariana Verónica Jobse, analista programadora universitaria de la Universidad Nacional de La Plata.
Espero que disfruten del proyecto tanto como yo disfrute de hacerlo.
Gracias por la oportunidad.





