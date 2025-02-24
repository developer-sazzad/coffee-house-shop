import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductView = ({ coffee }) => {
    const { _id, name, quentity, supplier, category, photo } = coffee;

    const handleDelete = _id => {
        // console.log(_id);

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
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div className="flex bg-[#F5F4F1] rounded-xl">
            <img src={photo} alt="" />
            <div className="w-full flex items-center pr-8 justify-between">
                <div>
                    <h2 className="font-medium text-xl">Name : {name}</h2>
                    <p>Supplier : {supplier}</p>
                    <p>Quentiry : {quentity}</p>
                    <p>Category : {category}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="btn text-2xl text-white font-medium bg-[#D2B48C]">
                        <IoEye /></button>
                    <Link to={`/update-coffee/${_id}`}>
                        <button className="btn text-2xl text-white font-medium bg-[#3C393B]">
                            <FiEdit />
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn text-2xl text-white font-medium bg-[#EA4744]">
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductView;

ProductView.propTypes = {
    coffee: PropTypes.object
}