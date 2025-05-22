import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'


const TableList = ({handleOpen, searchTerm=""}) => {
  const [tableData, setTableData] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get('http://localhost:3000/api/clients')
        setTableData(response.data)
      } catch (error) {
        setError(error.message)
      }
    };
    fetchData()
  }, [])
//   {
//     name: "Joe",
//     work: "freelance-developer",
//     blogs: "54",
//     websites: "32",
//     hackathons: "6",
//     location: "morocco",
//     id: "0",
//     email: "joe@example.com",
//     isActive: true,
//     rate: 101
//   },
//   {
//     name: "janet",
//     work: "fullstack-developer",
//     blogs: "34",
//     websites: "12",
//     hackathons: "8",
//     location: "Mozambique",
//     id: "1",
//     email: "janet@example.com",
//     isActive: false,
//     rate: 103
//   }
// ];
   const filterData = tableData.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.job.toLowerCase().includes(searchTerm.toLowerCase())  || client.email.toLowerCase().includes(searchTerm.toLowerCase()))
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
        <th>Rate</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody  className="hover">
      {/* row 1 */}
     {
        filterData.map((client, index) => 
               <tr key={client.id}>
        <th>{index + 1}</th>
        <td>{client.name}</td>
        <td>{client.email}</td>
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
            <button className="btn btn-accent">Delete</button>
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