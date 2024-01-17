import { Router } from "express";
import {
  buscarPersonas,
  buscarPersonaID,
  crearPersona,
  actualizarPersonaID,
  eliminarPersona,
} from "../controller/empleadoController.js";

const routerCrud = Router();

routerCrud.get("/data", buscarPersonas);
routerCrud.get("/data/:id", buscarPersonaID);
routerCrud.post("/data", crearPersona);
routerCrud.patch("/data/:id", actualizarPersonaID);
routerCrud.delete("/data/:id", eliminarPersona);

export default routerCrud;
