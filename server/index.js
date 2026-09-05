require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    message: "API de VetCitas funcionando",
  });
});

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "VetCitas API",
  });
});

app.listen(PORT, () => {
  console.log(`API disponible en http://localhost:${PORT}`);
});
