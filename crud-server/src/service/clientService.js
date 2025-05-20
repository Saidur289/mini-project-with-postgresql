import { query } from "../db.js"

export const getClients =async() => {
    const {rows} = await query('SELECT * FROM client_tb')
    return rows
}