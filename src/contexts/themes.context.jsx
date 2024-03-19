import { createContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabase/supabase.utils";


export const ThemesContext = createContext({

})

export const ThemesProvider = ({ children }) => {
    const [themes, setThemes] = useState([]);

    const fetchTheme = async () => {
        let { data: theme, error } = await supabase
            .from('theme')
            .select('*')

        if (error) {
            alert(error)
        }
        else setThemes(theme)
    }

    useEffect(() => {

        fetchTheme();

        /* fetch('http://localhost:5000/theme/get')
            .then(response => response.json())
            .then(donnees=>{
                setThemes(donnees.data);
            })
            .catch(error =>{
                console.log(`Error: ${error}`)
            }) */
    }, [])

    const value = { themes, setThemes }
    return (
        <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
    )
}


