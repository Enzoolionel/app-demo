import fs from "fs/promises";
import objtenerRuta from "../assets/obtenerRuta.js";

export const homeController = (req, res) => {
  const rutaCss = objtenerRuta("/frontend/public/styles/home.css");
  const rutaJS = objtenerRuta("/frontend/public/src/index.js");

  const contenidoDinamico = `
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../../frontend/public/styles/home.css">
        <title>Frontend con Backend</title>
    </head>
    <body>
        <div id="main">
          <button class="button">enviar</button>
          <button class="button">enviar</button>
          <button class="button">enviar</button>
          <button class="button">enviar</button>
        </div>
        <script src="${rutaJS}"></script>
    </body>
    </html>
  `;
  res.send(contenidoDinamico);
};
