import { createContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabase/supabase.utils";

export const QuestionsContext = createContext({

})

export const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);

    const fetchQuestion = async () => {
        let { data: question, error } = await supabase
            .from('question')
            .select('*')
        
        if (error){
            alert(error)
        }
        else setQuestions(question)

    }

    useEffect(()=>{
        fetchQuestion();
    }, [])

    const value = { questions, setQuestions}
    return (
        <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>
    )
}