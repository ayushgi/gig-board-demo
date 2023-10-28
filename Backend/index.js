// index.js

// index.js

// const connectToMongo = require("./db");

// Call the function to connect


const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 3000

app.use(express.json())
// app.get('/', (req, res) => {
//     res.send('Hello bug')
// })

app.use('/api/auth',require('./routes/Signup'));






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




connectToMongo();

