
const AddCoffee = () => {
    return (
        <div className="container mx-auto bg-base-200 p-10">
            <h2>Add a Coffee</h2>
            <form>
                <div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="fieldset">
                                <label className="fieldset-label text-xl">Name</label>
                                <input type="email" className="input w-full text-xl py-7" placeholder="Coffee Name" />
                            </div>
                            <div className="fieldset">
                                <label className="fieldset-label text-xl ">Chef</label>
                                <input type="email" className="input w-full text-xl py-7" placeholder="Enter coffee chef" />
                            </div>
                            <div className="fieldset">
                                <label className="fieldset-label text-xl">Supplier</label>
                                <input type="email" className="input w-full text-xl py-7" placeholder="Enter coffee supplier" />
                            </div>
                            <div className="fieldset">
                                <label className="fieldset-label text-xl">Category</label>
                                <input type="email" className="input w-full text-xl py-7" placeholder="Enter coffee category" />
                            </div>
                            <div className="fieldset">
                                <label className="fieldset-label text-xl">Details</label>
                                <input type="email" className="input w-full text-xl py-7" placeholder="Enter coffee details" />
                            </div>
                            <div className="fieldset">
                                <label className="fieldset-label text-xl">Photo</label>
                                <input type="email" className="input w-full text-xl py-7" placeholder="Enter photo URL" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;