
import axios from 'axios'
import { baseURL } from '../lib/utilis';


const TableList = ({handleOpen, searchTerm="", tableData, setTableData, error}) => {

   const filterData = tableData.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.job.toLowerCase().includes(searchTerm.toLowerCase())  || client.email.toLowerCase().includes(searchTerm.toLowerCase()))

   const handleDelete = async(id) => {
    const confirmDelete = window.confirm('Are You Sure To Delete?');
    if(confirmDelete){
      try {
        const response = await axios.delete(`${baseURL}api/clients/${id}`);
        console.log(response.data);
        setTableData((prev) => prev.filter(client => client.id !== id))
      } catch (error) {
        console.log('error from delete function', {error});
      }
    }
   }
    return (
       <>
       {error && <div className="alert alert-error">{error}</div>}
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Job</th>
        <th>Rate</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody  >
      {/* row 1 */}
     {
        filterData.map((client, index) => 
               <tr className="hover" key={client.id}>
        <th>{index + 1}</th>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.job}</td>
        <td>{client.rate}</td>
        <td>
            <button className={`btn rounded-full w-20 ${client.isActive? 'btn btn-primary': 'btn btn-outline btn-primary'}` }>
                {
                    client.isactive? 'Active' : 'Inactive'
                }
            </button>
        </td>
        <td>
            <button className="btn btn-secondary" onClick={() => handleOpen('edit',client)}>Update</button>
        </td>
        <td>
            <button className="btn btn-accent" onClick={() => handleDelete(client.id)}>Delete</button>
        </td>
      </tr>
        )
     }
     
    
    </tbody>
  </table>
</div></>
    );
};

export default TableList;