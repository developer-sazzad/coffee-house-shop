import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import signUpLottie from '../assets/lottie/sign up.json'
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Successfully!',
                    text: 'User added successfully.',
                    icon: 'success',
                    confirmButtonText: 'Thanks'
                });
            })
            .catch(error => {
                const errorMessage = error.message;
                Swal.fire({
                    title: 'Error!',
                    text: `Something Error ${errorMessage}`,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            })
    }
    return (
        <div className="w-[90%] mx-auto py-20">
            <div className="flex gap-10 flex-col lg:flex-row">
                <div className="flex-1 text-center flex justify-center flex-col items-center">
                    <div className="w-[150px] md:w-[400px]">
                        <Lottie animationData={signUpLottie} loop={true} />
                    </div>
                </div>
                <div className="flex-1 py-10 px-10 shadow-2xl rounded-2xl bg-gray-100">
                    <h1 className="text-2xl md:text-3xl font-bold pb-10">Sign Up now!</h1>
                    <form onSubmit={handleSignUp} className="block ">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" className="input focus:outline-none w-full" placeholder="Email" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input focus:outline-none w-full" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input focus:outline-none w-full" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;