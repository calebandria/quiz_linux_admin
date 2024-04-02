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
        else {setThemes(theme)
        console.log(theme)}
    }

    useEffect(() => {

        fetchTheme();
    }, [])

    const value = { themes, setThemes }
    return (
        <ThemesContext.Provider value={value}>{children}</ThemesContext.Provider>
    )
}


