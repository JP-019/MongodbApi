const Ejemplo = require("../../models/ejemplo.models/ejemplo.model");
// Eliminar
exports.eliminar = async (req, res) => {
  try {
    await Ejemplo.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};