const Navbar = ({onOpen, onSearch}) => {
  const handleSearch = e => {
    onSearch(e.target.value)
  }
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              
            </div>
          
          </div>
          <a className="btn btn-ghost text-xl">Client</a>
        </div>
        <div className="navbar-center">
          <div className="form-control">
      <input type="text" onChange={handleSearch} placeholder="Search" className="input input-bordered w-48 md:w-auto" />
    </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOpen}>Add Client</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
