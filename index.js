const express = require("express");
const redoc = require("redoc-express");
const app = express();
require("dotenv").config();

app.use(express.json());

const connectDB = require("./src/config/database");

connectDB();

app.use("/api/ejemplo", require("./src/routes/ejemplo"));

app.get("/docs/swagger.json",(req,res)=>{
  res.sendFile("swagger.json", { root: __dirname });
});

app.use("/docs", redoc({
  specUrl: "/docs/swagger.json",
  title: "Mi API"
}));

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT);
  console.log("Servidor corriendo en puerto " +'http://localhost:' + process.env.PORT + '/docs');
});

module.exports = app;