import { SiBuymeacoffee } from "react-icons/si";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
    const { photo, name, supplier, quentity, category, details } = useLoaderData();
    return (
        <div className="w-[90%] mx-auto md:py-12 my-8">
            <Link to='/'>
                <button className="btn btn-neutral text-white">
                    <TiArrowBackOutline />
                    Back to Home
                </button>
            </Link>
            <div className="lg:w-[60%] mx-auto flex justify-between mt-10 bg-[#F5F4F1] rounded-xl">
                <div className="flex-1/2">
                    <img className="md:w-full" src={photo} alt="" />
                </div>
                <div className="flex-1/2 flex items-center pr-8 py-10 justify-between">
                    <div className="space-y-2">
                        <h2 className="font-medium text-xl">Name : {name}</h2>
                        <p>Supplier : {supplier}</p>
                        <p>Quentiry : {quentity}</p>
                        <p>Category : {category}</p>
                        <p>Details : {details}</p>
                        <button className="btn text-white font-medium bg-[#EA4744] mt-10 ">
                            <SiBuymeacoffee />
                            Buy Coffee
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;