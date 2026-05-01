const Ejemplo = require("../../models/ejemplo.models/ejemplo.model");

// Crear
exports.crear = async (req, res) => {
  try {
    const nuevo = new Ejemplo(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
