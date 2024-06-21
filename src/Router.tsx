import {Navigate, createBrowserRouter} from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { AnimalApp } from './components/AnimalApp';
import { AnimalPageWrapper } from './components/AnimalPageWrapper';
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout>
        </Layout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/djur',
                element:<AnimalApp/>,
            },
                    {
                    path:'/djur/djurcard/:id',
                    element: <AnimalPageWrapper  />,
                   
                    }
                    ],
                    errorElement:<NotFound/>
               }    
              ]    
            )