import { useState } from "react";

const ModalForm = ({ isOpen, mode, onClose, onSubmits  }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rate, setRate] = useState('')
  const [status, setStatus] = useState(false)
  const [job, setJob] = useState('')
  const handleStatus = (e) => {
    if(status === 'active'){
      setStatus(e.target.value)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
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
                placeholder="daisy@site.com"
              />
            </label>
            <div className="flex justify-between my-4 items-center gap-2">
              <label className="input input-bordered flex items-center gap-2">
                
                <input value={rate} type="text" className="grow" placeholder="Rate" onChange={(e)=> setRate(e.target.value)}/>
              </label>
              <select value={status? 'Active': 'Inactive'} className="select select-bordered w-full max-w-xs" onChange={handleStatus}>
                <option disabled selected>
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
            <button onClick={onClose} className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
