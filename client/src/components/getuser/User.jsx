import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./user.css";
import axios from 'axios';



const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("http://localhost:8001/api/getAll");
            setUsers(response.data);
        }
        fetchData();
    },[])

const deleteUser = async(userId) =>{
    await axios.delete(`http://localhost:8001/api/delete/${userId}`)
        .then((response)=>{
            setUsers((prevUser)=> prevUser.filter((users) =>users._id!==userId));
            console.log(response);
        })
        .catch((error)=>{
                console.log(error);
        })
}


  return (
    <div className='userTable'>
        <Link to="/add" className='addButton'>Add User</Link>
    
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            
            <tbody>
            {
                    users.map((user, index)=>{
                        return(
                            
                            <tr key={user._id}>
                                <td>{index +1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className='actionButtons'>
                                    <button onClick={()=> deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                                    <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>

                        );
                    })
                }

                
            </tbody>

        </table>
       

    </div>
  )
}

export default User