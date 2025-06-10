import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QuioscoProvider } from './context/QuioscoProvider'
import router from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
        <QuioscoProvider>
            <RouterProvider router={router} />
        </QuioscoProvider>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <QuioscoProvider>
//             <RouterProvider router={router} />

//         </QuioscoProvider>
//     </React.StrictMode>
// )

