const Ejemplo = require("../../models/ejemplo.models/ejemplo.model");
// Leer todos
exports.obtenerTodos = async (req, res) => {
  try {
    const datos = await Ejemplo.find();
    res.json(datos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Leer uno por ID
exports.obtenerUno = async (req, res) => {
  try {
    const dato = await Ejemplo.findById(req.params.id);
    if (!dato) {
      return res.status(404).json({ mensaje: "No encontrado" });
    }
    res.json(dato);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};