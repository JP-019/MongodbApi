const express = require("express");
const router = express.Router();
// Importar controladores
const agregarController = require("../controllers/ejemplo.controller/agregar");
const leerController = require("../controllers/ejemplo.controller/leer");
const actualizarController = require("../controllers/ejemplo.controller/actualizar");
const eliminarController = require("../controllers/ejemplo.controller/eliminar");


try {
    router.post("/", agregarController.crear);
    router.get("/", leerController.obtenerTodos);
    router.get("/:id", leerController.obtenerUno);
    router.put("/:id", actualizarController.actualizar);
    router.delete("/:id", eliminarController.eliminar);
    
} catch (error) {
    console.log(error);
    
}

module.exports = router;