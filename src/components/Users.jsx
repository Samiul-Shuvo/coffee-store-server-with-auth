import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const handleDelete =id =>{

        fetch(`https://coffee-store-server-opyzejiic-samiul-shuvos-projects.vercel.app/user/${id}`,{
            method: "DELETE",
           
        })
        .then(res => res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                console.log('Deleted Successfully')
                const remainingUser = users.filter(user=> user._id !== id)
                setUsers(remainingUser)
            }
        })

    }
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);

    return (
        <div>
            <h2>Users : {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
      {/* row 1 */}
    <tbody>
        {
            users.map(user =>   
            <tr key={user._id}>
              <th>1</th>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td ><button onClick={(()=>handleDelete(user._id))} className="btn">X</button></td>
            </tr>)
        }
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default Users;