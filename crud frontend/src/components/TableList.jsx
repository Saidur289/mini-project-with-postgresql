

const TableList = () => {
   const clients = [
  {
    name: "Joe",
    work: "freelance-developer",
    blogs: "54",
    websites: "32",
    hackathons: "6",
    location: "morocco",
    id: "0",
    email: "joe@example.com",
    isActive: true,
    rate: 101
  },
  {
    name: "janet",
    work: "fullstack-developer",
    blogs: "34",
    websites: "12",
    hackathons: "8",
    location: "Mozambique",
    id: "1",
    email: "janet@example.com",
    isActive: false,
    rate: 103
  }
];

    return (
       <>
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
        clients.map((client, index) => 
               <tr key={client.id}>
        <th>{index + 1}</th>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.rate}</td>
        <td>
            <button className={`btn rounded-full w-20 ${client.isActive? 'btn btn-primary': 'btn btn-outline btn-primary'}` }>
                {
                    client.isActive? 'Active' : 'Inactive'
                }
            </button>
        </td>
        <td>
            <button className="btn btn-secondary">Update</button>
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