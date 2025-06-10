import { createContext } from 'react'
const QuioscoContext = createContext()
const QuioscoProvider = ({children}) => {
    const hola = 'Hola Mundo'

    return (
        <QuioscoContext.Provider 
            value={{
                hola
            }}
        
        
        >{children}</QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext