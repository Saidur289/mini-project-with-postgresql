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
export const createClient = async(req, res) => {
    try {
        const clients = req.body;
        const newData = await clientService.createClient(clients)
        console.log(newData, 'New Data from create client function');
        res.status(200).json(newData)
    } catch (error) {
        console.log('Error from posting Data create client function',error);
        res.status(500).json({message: 'Internal Server error'})

    }
}