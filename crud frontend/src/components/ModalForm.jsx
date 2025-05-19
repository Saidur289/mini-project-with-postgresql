

const ModalForm = ({isOpen, mode, onClose, onSubmit}) => {
    return (
        <>
        <dialog id="my_modal_3" className="modal" open={isOpen}>
  <div className="modal-box">
    <h1 className="font-bold text-lg py-4">{mode === 'edit'? 'Edit Client': 'Client Details'}</h1>
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
      <button className="btn btn-success">{mode === 'edit'? 'Save Changes': 'Add Client'}</button>
    </form>
  
  </div>
</dialog>
        </>
    );
};

export default ModalForm;