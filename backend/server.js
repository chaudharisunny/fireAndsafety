import express from 'express'
const app = express()
import cors from 'cors'
const port = 3000
import connectDB from './config.js';
import routesIndex from './routes.js'
connectDB()
app.use(express.json())
app.use(cors())
app.use('/api',routesIndex)

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 