import ThemeItem from '../../components/theme-item/theme-item.component';
import QuestionItem from '../../components/question-item/question-item.component';

import './home.styles.scss'
import { useState } from "react";

const Home = () =>{
    const [id_theme, setId_theme] = useState(0);
    /* const titles =["THEMES", "QUESTIONS", "ANSWERS"]; */
    
    return(
        <div className="home-container">
            <ThemeItem title ="THEMES" setId_theme={setId_theme} className="list-item"/>
            <QuestionItem title = "QUESTIONS" setId_theme={setId_theme} id_theme={id_theme} className="list-item" />
        </div>
        
    )
};
export default Home;

