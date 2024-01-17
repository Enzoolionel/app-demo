import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const objtenerRuta = (url) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const ruta = path.join(__dirname, url);

  return ruta
};

export default objtenerRuta;