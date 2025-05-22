import * as clientService from '../service/clientService.js'
export const getClients = async(req, res) => {
    try {
        const clients = await clientService.getClients()
        // console.log({clients}, 'client controller');
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
        // console.log(newData, 'New Data from create client function');
        res.status(200).json(newData)
    } catch (error) {
        console.log('Error from posting Data create client function',error);
        res.status(500).json({message: 'Internal Server error'})

    }
}
export const updateClient = async(req, res) => {
    try {
       const clientId = req.params.id 
       const clientData = req.body;
       const updateClient = await clientService.updateClient(clientData, clientId)
       if(!updateClient){
        return res.status(400).json({message: 'Client Not Found'})
       }
    //    console.log({updateClient}, 'update client data');
       return res.status(200).json(updateClient)
    } catch (error) {
        console.log('Error from posting Data update client function',error);
        res.status(500).json({message: 'Internal Server error'})

    }
}
export const deleteClient = async(req, res) => {
    try {
       const clientId = req.params.id 
        const deleted = await clientService.deleteClient(clientId)
       if(!deleted){
        return res.status(404).json({message: 'Client Not Found'})
       }
    //    console.log({updateClient}, 'update client data');
       return res.status(200).send({message: 'Client Deleted Successfully'})
    } catch (error) {
        console.log('Error from posting Data update client function',error);
        res.status(500).json({message: 'Internal Server error'})

    }
}
export const searchClients = async(req, res) => {
    const searchTerm = req.query.q;
    // console.log(searchTerm, 'here you search bro');
    const clients = await clientService.searchClients(searchTerm);
    res.status(200).json(clients)
}