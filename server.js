const cors = require("cors");
const express = require("express");
const app = express();
const dbConnection = require("./db");
const usersRoute = require("./routes/usersRoute");
const postsRoute = require("./routes/postsRoute")
const path = require('path')
require("dotenv").config();

app.use(express.json({limit:'25mb'}))

app.use(cors());
app.use('/api/users/', usersRoute);
app.use('/api/posts/' , postsRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

