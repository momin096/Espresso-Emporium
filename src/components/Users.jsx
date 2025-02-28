import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const Users = () => {
    const loadedUsers = useLoaderData();

    const [users, setUsers] = useState(loadedUsers);

    const handleUserDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete from the database 
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then((res => res.json()))
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your User has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    })
            }
        });

    }
    return (
        <div>
            
            <h2 className="text-4xl">Users{users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Sign In</th>
                                <th>Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user => <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td className="space-x-5">
                                        <button className="text-3xl p-2 hover:bg-cyan-600 rounded-lg">
                                            <FiEdit3 />
                                        </button>
                                        <button onClick={() => handleUserDelete(user._id)} className=" text-3xl p-2 hover:bg-red-600 rounded-lg">
                                            <MdDeleteForever />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;