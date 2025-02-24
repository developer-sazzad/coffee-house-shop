import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quentity, supplier, category, taste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quentity = form.quentity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quentity, supplier, taste, category, details, photo }
        // console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount> 0) {
                    Swal.fire({
                        title: 'SuccessFully!',
                        text: 'Updated Coffee successfuly',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    });
                }
            })
    }
    return (
        <div className="w-[90%] mx-auto">
            <div className="p-8 md:px-20 md:py-16 my-10 bg-gray-300">
                <h3 className="text-3xl font-bold text-center mb-10">Update a Coffee</h3>
                <form onSubmit={handleUpdateCoffee} className="space-y-5">
                    {/* Add coffee name and quentity row */}
                    <div className="md:flex md:space-y-0 gap-5">
                        <label className="form-control w-full">
                            <span>Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered input-lg w-full" />
                        </label>
                        <label className="form-control w-full">
                            <span>Quentity</span>
                            <input type="text" name="quentity" defaultValue={quentity} placeholder="Enter coffee quentity" className="input input-bordered input-lg w-full" />
                        </label>
                    </div>
                    <div className="md:flex gap-5">
                        <label className="form-control w-full">
                            <span>Supplier</span>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered input-lg w-full" />
                        </label>
                        <label className="form-control w-full">
                            <span>Taste</span>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered input-lg w-full" />
                        </label>
                    </div>
                    <div className="md:flex gap-5">
                        <label className="form-control w-full">
                            <span>Category</span>
                            <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered input-lg w-full" />
                        </label>
                        <label className="form-control w-full">
                            <span>Details</span>
                            <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered input-lg w-full" />
                        </label>
                    </div>
                    <label className="form-control w-full">
                        <span>Photo</span>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered input-lg w-full" />
                    </label>
                    <input type="submit" className="btn btn-neutral mt-10 btn-lg w-full" value="Update Coffee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;