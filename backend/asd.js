const insertarDato = async () => {
  try {
    const newUser = {
      nombre,
      apellido,
      edad,
    };

    const data = await fetchData("http://localhost:3000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    obtenerDatos();
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};