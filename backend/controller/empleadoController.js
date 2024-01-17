import { Empleado } from "../db/userSchema.js";

export const buscarPersonas = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (e) {
    console.log(e);
  }
};

export const buscarPersonaID = async (req, res) => {
  try {
    const id = req.params.id;
    const empleado = await Empleado.findById(id);
    res.json(empleado);
  } catch (e) {
    console.log(e);
  }
};

export const crearPersona = async (req, res) => {
  try {
    const nuevoEmpleado = new Empleado(req.body);
    const guardarEmpleado = await nuevoEmpleado.save();
    res.send(guardarEmpleado);
  } catch (e) {
    console.log(e);
  }
};

export const actualizarPersonaID = async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;

    const personaActualizada = await Empleado.findByIdAndUpdate(
      id,
      { $set: datosActualizados },
      { new: true }
    );

    res.json(personaActualizada);
  } catch (e) {
    console.log(e);
  }
};

export const eliminarPersona = async (req, res) => {
  try {
    const id = req.params.id;

    const personaEliminada = await Empleado.findByIdAndDelete(id);

    res.json(personaEliminada);
  } catch (e) {
    console.log(e);
  }
};
