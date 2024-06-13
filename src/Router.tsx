import {createBrowserRouter} from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Djur } from './pages/Djur';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children: [
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/djur',
                element:<Djur></Djur>
            }
        ]
    }
])