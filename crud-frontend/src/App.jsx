
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'
import axios from 'axios'
import { baseURL } from './lib/utilis'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')
  const [searchTerm , setSearchTerm ] = useState('')
  const [clientData, setClientData] = useState(null)
    const [tableData, setTableData] = useState([])
  const [error, setError] = useState('')
  console.log(clientData);
  const handleOpen = (mode, client) => {
    setClientData(client)
    setIsOpen(true)
    setModalMode(mode)
  }
     const fetchData = async() => {
      try {
        const response = await axios.get(`${baseURL}api/clients`)
        setTableData(response.data)
      } catch (error) {
        setError(error.message)
      }
    };
   useEffect(() => {
 
    fetchData()
  }, [])
  const handleSubmit = async(newClientData) => {
    if(modalMode === 'add'){
      try {
        const response = await axios.post(`${baseURL}api/clients`, newClientData)
        console.log('Clicked Me', response.data);
        setTableData(prev => [...prev, response.data])
      } catch (error) {
        console.log('Error From App jsx submit function', {error});
      }
    }
    else{
      console.log('edit clicked',clientData.id);
      try {
        const response = await axios.put(`${baseURL}api/clients/${clientData.id}`, newClientData)
        console.log('all update data', response.data);
        setTableData(prev => prev.map(client => client.id === clientData.id ? response.data : client))
      } catch (error) {
        console.log('put method function', {error});
      }
    }
  }


  return (
    <>
   
     <Navbar onOpen={() => handleOpen('add')} onSearch ={setSearchTerm} />
     <TableList handleOpen={handleOpen} searchTerm={searchTerm} tableData={tableData} setTableData={setTableData} error={error}/>
     <ModalForm mode={modalMode} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmits={handleSubmit} clientData={clientData}/>
    </>
  )
}

export default App
