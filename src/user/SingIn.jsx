import Lottie from 'lottie-react';
import loginLottie from '../assets/lottie/LoginLottie.json'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const SingIn = () => {
    const { signInUser, signInGoogle, setUser } = useContext(AuthContext);

    const handleSignInUser = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const googleLogin = () => {
        signInGoogle()
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="w-[90%] mx-auto py-20">
            <div className="flex gap-10 flex-col lg:flex-row">
                <div className="flex-1 text-center flex justify-center flex-col items-center">
                    <div className="w-[400px] md:w-[430px] ">
                        <Lottie animationData={loginLottie} loop={true} />
                    </div>
                </div>
                <div className="flex-1 py-10 px-10 shadow-2xl rounded-2xl bg-gray-100">
                    <h1 className="text-center text-2xl md:text-3xl font-bold">Login now!</h1>
                    <div className="my-10 flex justify-center gap-5">
                        <button onClick={googleLogin} className='btn '>
                            Login with Google
                        </button>
                        <button onClick={googleLogin} className='btn'>
                            Login With Github
                        </button>
                    </div>
                    <form onSubmit={handleSignInUser} className="block ">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input focus:outline-none w-full" placeholder="Email" />
                            <label className="fieldset-label pt-5">Password</label>
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

export default SingIn;