
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'
import axios from 'axios'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')
  const [searchTerm , setSearchTerm ] = useState('')
  const [clientData, setClientData] = useState(null)
  console.log(clientData);
  const handleOpen = (mode, client) => {
    setClientData(client)
    setIsOpen(true)
    setModalMode(mode)
  }
  const handleSubmit = async(newClientData) => {
    if(modalMode === 'add'){
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData)
        console.log('Clicked Me', response.data);
      } catch (error) {
        console.log('Error From App jsx submit function', {error});
      }
    }
    else{
      console.log('edit clicked',clientData.id);
      try {
        const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData)
        console.log('all update data', response.data);
      } catch (error) {
        console.log('put method function', {error});
      }
    }
  }


  return (
    <>
   
     <Navbar onOpen={() => handleOpen('add')} onSearch ={setSearchTerm} />
     <TableList handleOpen={handleOpen} searchTerm={searchTerm}/>
     <ModalForm mode={modalMode} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmits={handleSubmit} clientData={clientData}/>
    </>
  )
}

export default App
