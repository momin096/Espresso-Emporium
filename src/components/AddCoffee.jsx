import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import Navbar from './Navbar';


const AddCoffee = () => {




    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const photo = form.photo.value;

        // console.log(name, chef, quantity, category, photo);

        const newCoffee = { name, chef, quantity, category, photo }

        // send data to the server 
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }
    return (
        <div>
            <Navbar />
            <div className="container mx-auto bg-base-200 p-10 min-h-[calc(100vh-200px)] rounded-2xl mt-10">
                <h2 className="text-4xl mb-10">Add a Coffee</h2>
                <form onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center min-h-[calc(100vh-500px)]">
                        <div className="fieldset">
                            <label className="fieldset-label text-xl">Name</label>
                            <input name="name" type="text" className="input w-full text-xl py-7" placeholder="Coffee Name" />
                        </div>
                        <div className="fieldset">
                            <label className="fieldset-label text-xl ">Chef</label>
                            <input name="chef" type="text" className="input w-full text-xl py-7" placeholder="Enter coffee chef" />
                        </div>
                        <div className="fieldset">
                            <label className="fieldset-label text-xl">Quantity</label>
                            <input name="quantity" type="number" className="input w-full text-xl py-7" placeholder="How many to add" />
                        </div>
                        <div className="fieldset">
                            <label className="fieldset-label text-xl">Category</label>
                            <input name="category" type="text" className="input w-full text-xl py-7" placeholder="Enter coffee category" />
                        </div>

                        <div className="fieldset col-span-2">
                            <label className="fieldset-label text-xl">Photo</label>
                            <input name="photo" type="text" className="input w-full text-xl py-7" placeholder="Enter photo URL" />
                        </div>
                    </div>
                    <input type="submit" className=" bg-gradient-to-bl from-gray-500 to-gray-700 hover:bg-gradient-to-tr px-10 py-5 rounded-xl mt-5 cursor-pointer" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;