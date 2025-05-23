import { useEffect, useState } from "react";

const ModalForm = ({ isOpen, mode, onClose, onSubmits , clientData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rate, setRate] = useState('')
  const [status, setStatus] = useState(false)
  const [job, setJob] = useState('')
  const handleStatus = (status) => {
    if(status === 'Active'){
      setStatus(true)
    }
    
    console.log('clicked me', status);
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(name !== '' || email !== ''|| job !== '' || rate !== ''){
  try {
      const clientData = {name, email, job, rate: Number(rate), isactive: status };
      await onSubmits(clientData)
     onClose()
    } catch (error) {
      console.log('Error From Modalform component', error);
    }
    }
  
     
  }
  useEffect(() => {
    if(mode === 'edit' && clientData){
      setName(clientData.name);
      setEmail(clientData.email);
      setJob(clientData.job);
      setRate(clientData.rate);
      setStatus(clientData.isactive);
    }else{
      setName('');
      setEmail('');
      setJob('')
      setRate('')
      setStatus(false)
    }
  
 
  }, [mode, clientData])
  
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h1 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h1>
          <form  onSubmit={handleSubmit} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered flex my-4  items-center gap-2" >
             
              <input value={name} type="text" className="grow" placeholder="Name"  onChange={(e)=> setName(e.target.value)} />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
             
              <input value={email}  onChange={(e)=> setEmail(e.target.value)}
                type="text"
                className="grow"
                placeholder="Your Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
             
              <input value={job} onChange={(e)=> setJob(e.target.value)}
                type="text"
                className="grow"
                placeholder="Your Job"
              />
            </label>
            <div className="flex justify-between my-4 items-center gap-2">
              <label className="input input-bordered flex items-center gap-2">
                
                <input value={rate} type="text" className="grow" placeholder="Rate" onChange={(e)=> setRate(e.target.value)}/>
              </label>
              <select  className="select select-bordered w-full max-w-xs" onChange={(e) => handleStatus(e.target.value)}>
                <option disabled defaultValue={status? 'Active': "InActive"}>
                  Select Status
                </option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <button  className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
