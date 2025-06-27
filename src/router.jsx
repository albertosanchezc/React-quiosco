import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminLayout from './layouts/AdminLayout'
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,//aquí estamos mandando llamar el layout este es un componente <NombreComponente />
        children: [// definimos los elementos a los que se aplicará este Layout
            {
                index: true,
                element: <Inicio />,
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,//aquí estamos mandando llamar el layout 
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
])

export default router