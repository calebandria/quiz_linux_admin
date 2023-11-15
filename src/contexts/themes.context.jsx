import { createContext, useState, useEffect } from "react";


export const ThemesContext = createContext({

})

export const ThemesProvider = ({ children})=>{
    const [themes, setThemes] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/theme/get')
            .then(response => response.json())
            .then(donnees=>{
                setThemes(donnees.data);
            })
            .catch(error =>{
                console.log(`Error: ${error}`)
            })
    },[])

    const value = {themes, setThemes}
    return(
        <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
    )
}


 