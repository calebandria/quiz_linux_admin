import { QuestionsContext } from '../../contexts/questions.context';
import './question-item.styles.scss'
import { /* useState, */ useContext} from "react";
const QuestionItem = ({title, id_theme})=>{
    const {questions} = useContext(QuestionsContext);

    /* const handleClick = (event) =>{
        setLabel(event.target.innerHTML);
    }

 */
   
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
                            <p key={index}>{element.question}</p>
                    )})
                }
                </div>
            </div>
        </div>

        
    )
    
}
export default QuestionItem;