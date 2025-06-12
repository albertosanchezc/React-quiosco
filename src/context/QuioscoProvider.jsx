import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'

const QuioscoContext = createContext()
const QuioscoProvider = ({children}) => {

    const [categorias,setCategorias] = useState(categoriasDB);
    const [categoriaActual,setcategoriaActual] = useState(categorias[0]);

    return (
        <QuioscoContext.Provider 
            value={{
                categorias,
                categoriaActual
            }}
        
        
        >{children}</QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext