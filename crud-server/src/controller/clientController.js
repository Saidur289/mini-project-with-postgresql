import * as clientService from '../service/clientService.js'
export const getClients = async(req, res) => {
    try {
        const clients = await clientService.getClients()
        console.log({clients}, 'client controller');
        res.status(200).json(clients)
    } catch (error) {
        console.log('Error Fetching Data',error);
        res.status(500).json({message: 'Internal Server error'})

    }
}