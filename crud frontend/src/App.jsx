
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')
  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
  }
  const handleSubmit = () => {
    if(modalMode === 'add'){
      console.log('add clicked');
    }
    else{
      console.log('edit clicked');
    }
  }


  return (
    <>
   
     <Navbar onOpen={() => handleOpen('add')}/>
     <TableList handleOpen={handleOpen}/>
     <ModalForm mode={modalMode} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit}/>
    </>
  )
}

export default App
