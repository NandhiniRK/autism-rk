const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const teachersRouter = require("./routes/teachers");




app.use(bodyParser.json());
app.use("/teachers", teachersRouter);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Ensure to export the app if needed elsewhere
