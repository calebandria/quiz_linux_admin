import ThemeItem from '../../components/theme-item/theme-item.component';
import QuestionItem from '../../components/question-item/question-item.component';
import AnswerItem from '../../components/answer-item/answer-item.component';
import './home.styles.scss'
import { useState } from "react";

const Home = () =>{
    const [id_theme, setId_theme] = useState(0);
    const [id_question, setId_question] = useState(0);
    const [activeTheme, setActiveTheme] = useState(-1);
    const [activeQuest, setActiveQuest] = useState(-1)
    /* const titles =["THEMES", "QUESTIONS", "ANSWERS"]; */
    
    return(
        <div className="home-container">
            <ThemeItem title ="THEMES" setId_theme={setId_theme} className="list-item" activeTheme={activeTheme} setActiveTheme={setActiveTheme} setActiveQuest={setActiveQuest}/>
            <QuestionItem title = "QUESTIONS" setId_question={ setId_question} id_theme={id_theme} className="list-item" setActiveQuest={setActiveQuest} activeQuest={activeQuest} />
            <AnswerItem title="ANSWERS" id_question={id_question} activeQuest={activeQuest} />
        </div>
        
    )
};
export default Home;

