import pg from 'pg'
import 'dotenv/config'
const db = new pg.Client({
     host: process.env.HOST,
      user: process.env.USER,
      port: process.env.PORT,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
})
db.connect();
db.on('error', (err) => {
    console.error('Idle client server', err)
    process.exit(-1)
})
export const query = (text, params) => db.query(text, params)