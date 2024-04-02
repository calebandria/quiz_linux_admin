import { createContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabase/supabase.utils";

export const AnswersContext = createContext({

})

export const AnswersProvider = ({ children }) => {
    const [answers, setAnswers] = useState([]);

    const fetchAnswer = async () => {
        let { data: answer, error } = await supabase
            .from('answer')
            .select('*')
        
        if (error){
            alert(error)
        }
        else {
            setAnswers(answer)
            console.log(answer)
        }

    }

    useEffect(()=>{
        fetchAnswer();
    }, [])

    const value = { answers, setAnswers }
    return (
        <AnswersContext.Provider value={value}>{children}</AnswersContext.Provider>
    )
}