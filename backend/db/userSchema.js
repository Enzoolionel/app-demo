import mongoose, { version } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre: String,
    apellido: String,
    edad: Number,
  },
  { versionKey: false }
);

export const Empleado = mongoose.model("empleados", userSchema);
