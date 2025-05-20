import { query } from "../db.js"

export const getClients =async() => {
    const {rows} = await query('SELECT * FROM client_tb')
    return rows
}
export const createClient = async(clientData) => {
    const {name, email, job, rate, isactive} = clientData;
    const {rows} = await query(`INSERT INTO client_tb (name, email, job, rate, isActive) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, email, job, rate, isactive]);
    return rows[0]
}
export const updateClient = async(clientData, clientId) => {
    const {name, email, job, rate, isactive} = clientData;
    // console.log(clientData);
    const {rows} = await query(`UPDATE  client_tb SET name = $1, email = $2, job = $3, rate = $4, isActive = $5 WHERE id = $6 RETURNING *`, [name, email, job, rate, isactive, clientId]);
    return rows[0]
}
export const deleteClient = async(clientId) => {
    const {rowCount} = await query(`DELETE FROM client_tb WHERE id = $1`, [clientId])
    
    return rowCount > 0 ;
}
export const searchClients = async(searchTerm) => {
    const {rows} = await query(`SELECT * FROM client_tb WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1`, [`%${searchTerm}%`])
    return rows
}