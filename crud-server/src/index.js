import 'dotenv/config'
import clientRoutes from './routes/clientRoutes.js'
import path from 'path';
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000;
const __dirname = path.resolve();
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`Hello World`)
})
app.use('/api', clientRoutes)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../crud-frontend/dist")));

  app.all('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, "../../crud-frontend", "dist", "index.html"));
  });
}
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
