import express from "express";
import cors from "cors";
import { conexionBD } from "./db/dbConection.js";
import routerCrud from "./routes/empleado.routes.js";
import routerHome from "./routes/home.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.disable("x-powered-by");
// app.use(express.static('public'));
conexionBD("mongodb://localhost:27017/empresa");

app.use("/api", routerCrud)
app.use("/api", routerHome)


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
