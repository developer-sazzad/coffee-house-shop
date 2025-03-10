import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="w-[90%] mx-auto py-20">
            <div className="flex gap-10 flex-col lg:flex-row-reverse">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="flex-1 shadow-2xl rounded-2xl bg-gray-100">
                    <form onSubmit={handleSignUp} className="block py-10 px-10 ">
                        <fieldset className="fieldset">
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