import { Link } from 'react-router-dom';
import errorImage from '../assets/404/404.gif'
const Error = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='text-center'>
                <img src={errorImage} className='w-[70%] mx-auto' alt="" />
                <Link to='/' className='btn'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;