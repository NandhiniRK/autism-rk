const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());
// const teachersRouter = require("./routes/teachers");
const clientRouter = require("./routes/client");


app.use(bodyParser.json());
// app.use("/teachers", teachersRouter);
app.use("/client",clientRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Ensure to export the app if needed elsewhere
