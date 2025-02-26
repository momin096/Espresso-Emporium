import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, chef, quantity, category, photo } = coffee;
    console.log(name);

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const photo = form.photo.value;

        // console.log(name, chef, quantity, category, photo);

        const updatedCoffee = { name, chef, quantity, category, photo };

        // send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Coffee Updated Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            });
    }

    return (
        <div className="container mx-auto bg-base-200 p-10 min-h-[calc(100vh-200px)] rounded-2xl mt-10">
            <h2 className="text-4xl mb-10">Update: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center min-h-[calc(100vh-500px)]">
                    <div className="fieldset">
                        <label className="fieldset-label text-xl">Name</label>
                        <input name="name" type="text" className="input w-full text-xl py-7" defaultValue={name} placeholder="Coffee Name" />
                    </div>
                    <div className="fieldset">
                        <label className="fieldset-label text-xl ">Chef</label>
                        <input name="chef" type="text" className="input w-full text-xl py-7" defaultValue={chef} placeholder="Enter coffee chef" />
                    </div>
                    <div className="fieldset">
                        <label className="fieldset-label text-xl">Quantity</label>
                        <input name="quantity" type="number" className="input w-full text-xl py-7" defaultValue={quantity} placeholder="How many to add" />
                    </div>
                    <div className="fieldset">
                        <label className="fieldset-label text-xl">Category</label>
                        <input name="category" type="text" className="input w-full text-xl py-7" defaultValue={category} placeholder="Enter coffee category" />
                    </div>

                    <div className="fieldset col-span-2">
                        <label className="fieldset-label text-xl">Photo</label>
                        <input name="photo" type="text" className="input w-full text-xl py-7" defaultValue={photo} placeholder="Enter photo URL" />
                    </div>
                </div>
                <input type="submit" className=" bg-gradient-to-bl from-gray-500 to-gray-700 hover:bg-gradient-to-tr px-10 py-5 rounded-xl mt-5 cursor-pointer" value="Update" />
            </form>
        </div>
    );
};

export default UpdateCoffee