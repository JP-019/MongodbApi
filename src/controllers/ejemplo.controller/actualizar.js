const Ejemplo = require("../../models/ejemplo.models/ejemplo.model");
// Actualizar
exports.actualizar = async (req, res) => {
  try {
    const actualizado = await Ejemplo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};