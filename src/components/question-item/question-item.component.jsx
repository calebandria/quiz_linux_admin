import { QuestionsContext } from '../../contexts/questions.context';
import './question-item.styles.scss'
import { useContext} from "react";
const QuestionItem = ({title, id_theme, setId_question, setActiveQuest, activeQuest})=>{
    const {questions} = useContext(QuestionsContext);

    const handleClick = (event, index, id) =>{
        setId_question(id)
        setActiveQuest(index)
    }


   
    return(
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                {
                   questions.filter(element=>
                        element.id_theme === id_theme
                    ).map((element, index)=>{
                        return(
                            <p key={index} style={{ backgroundColor: activeQuest === index ? "#FFA629" : "#757575" }} onClick={(e) => handleClick(e, index, element.id_question)}>{element.question}</p>
                    )})
                }
                </div>
            </div>
        </div>

        
    )
    
}
export default QuestionItem;