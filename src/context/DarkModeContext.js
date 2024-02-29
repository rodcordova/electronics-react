import { useContext,createContext ,useState} from "react";// utilizar , crear esa variable, definir valor

const DarkModeContext=createContext()
// 1 formade proveer(componentes que pueden acceder)
export const DarkModeProvider=(props)=>{
    const [darkMode, setDarkMode] = useState(false) // booleano para decir que eactivado el tema oscuro

    const toogleDarkMode=()=>{
        setDarkMode(!darkMode)

        if(!darkMode){
            document.body.firstElementChild.classList.add("darkMode") // agrego la clase darkmode css al root
        }else{
            document.body.firstElementChild.classList.remove("darkMode")// remuevo la clase darkmode al root
        }
    }

    return(
        <DarkModeContext.Provider value={{ darkMode,toogleDarkMode }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

// 2 forma de consultar(consultar el boobleano)
export const useDarkModelContext=()=>useContext(DarkModeContext)
