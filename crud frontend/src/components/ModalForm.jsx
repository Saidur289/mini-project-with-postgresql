const ModalForm = ({ isOpen, mode, onClose, onSubmit }) => {
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h1 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h1>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered flex my-4  items-center gap-2">
              Name
              <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
              Job
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
            <div className="flex justify-between my-4 items-center gap-2">
              <label className="input input-bordered flex items-center gap-2">
                Rate
                <input type="text" className="grow" placeholder="Rate" />
              </label>
              <select className="select select-bordered w-full max-w-xs">
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
            <button className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
