import { createBrowserRouter } from 'react-router-dom';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';
import MainLayout from '../Layout/MainLayout';
import HomeLayout from '../Layout/HomeLayout';
import Error from '../components/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
                
            },
            {
                path: '/add-coffee',
                element: <AddCoffee></AddCoffee>
            }
        ]
    },
    {
        path: '*', 
        element: <Error></Error>
    }
    

])

export default router;