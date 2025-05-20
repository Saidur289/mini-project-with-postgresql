import 'dotenv/config'
// const express = require('express')
import clientRoutes from './routes/clientRoutes.js'
// const cors = require('cors')
import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`Hello World`)
})
app.use('/api', clientRoutes)
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
