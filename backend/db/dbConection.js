import mongoose from "mongoose";

export const conexionBD = (URL) => {
  mongoose.connect(URL);

  const conexion = mongoose.connection;

  conexion.on(
    "error",
    console.error.bind(console, "Error de conexión a MongoDB:")
  );
  conexion.once("open", () => {
    console.log("Conectado a MongoDB");
  });
};
