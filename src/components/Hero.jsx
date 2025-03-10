import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <div className="heroBg">
            <div className="hero py-28">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-5/12">

                    </div>
                    <div className="w-7/12">
                        <h1 className="text-3xl lg:text-6xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="py-6">
                            Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        {/* <button className="btn btn-primary">Learn More</button> */}
                        <Link to='/' className="btn mt-3  text-lg border-none text-white font-medium bg-[#EA4744]">Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;