const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL)

app.use("/movies", require("./routes/movies.routes"))

const PORT = process.env.PORT || 8081;

app.listen(PORT, ()=>{
    console.log(`DB is Connected to Port No: ${PORT}..!`);
})