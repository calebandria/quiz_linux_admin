import ThemeItem from '../../components/theme-item/theme-item.component';
import QuestionItem from '../../components/question-item/question-item.component';

import './home.styles.scss'
import { useState } from "react";

const Home = () =>{
    const [label, setLabel] = useState("");
    /* const titles =["THEMES", "QUESTIONS", "ANSWERS"]; */
    
    return(
        <div className="home-container">
            <ThemeItem title ="THEMES" setLabel={setLabel} className="list-item"/>
            <QuestionItem title = "QUESTIONS" setLabel={setLabel} label={label} className="list-item" />
        </div>
        
    )
};
export default Home;