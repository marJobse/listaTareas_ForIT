const express = require("express");
const app = express();
const cors = require("cors");
const tasksRouter = require("./routes/tasks");
const PORT = process.env.PORT || 3002;

require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
