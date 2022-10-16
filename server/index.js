require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static("build"));

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
