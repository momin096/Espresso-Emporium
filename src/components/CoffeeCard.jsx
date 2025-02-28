import { FaRegEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, chef, quantity, category, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
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
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-2xl flex justify-between items-center">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="text-left space-y-2">
                <h2 className="card-title text-2xl">{name}</h2>
                <p>Available: {quantity}</p>
                <p>Chef: {chef}</p>
                <p>Category: {category}</p>
            </div>
            <div className="flex flex-col gap-5">
                <button className="bg-fuchsia-700 px-2 py-1 text-2xl rounded-sm">
                    <FaRegEye />
                </button>
                <Link to={`updateCoffee/${_id}`} className="bg-blue-400 text-neutral-800 px-2 py-1 text-2xl rounded-sm">
                    <MdEdit />
                </Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-400 text-black px-2 py-1 text-2xl rounded-sm">
                    <MdDelete />
                </button>
            </div>
        </div>

    );
};

export default CoffeeCard;