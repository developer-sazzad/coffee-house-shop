import { Link, useLoaderData } from "react-router-dom";
import ProductView from "./ProductView";
import { PiCoffee } from "react-icons/pi";
import { useState } from "react";


const Products = () => {
    const loadCoffees = useLoaderData();
    const [coffees, setCoffee] = useState(loadCoffees);
    return (
        <div className="w-[90%] mx-auto py-20">

            <div className="text-center my-10 space-y-3">
                <h2 className="text-4xl font-bold">Our Popular Products</h2>
                <Link to='add-coffee' className="btn mt-3  text-xl text-white font-medium bg-[#EA4744]">Add Coffee <PiCoffee className="font-extrabold text-2xl" />
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    coffees.map(coffee => <ProductView
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffee={setCoffee}
                    ></ProductView>)
                }
            </div>
        </div>
    );
};

export default Products;