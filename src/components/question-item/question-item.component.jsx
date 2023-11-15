import './question-item.styles.scss'
import { useState,useEffect } from "react";
const QuestionItem = ({title, label})=>{
    const [question, setQuestion] = useState([]);
    /* const handleClick = (event) =>{
        setLabel(event.target.innerHTML);
    }

 */
    useEffect(()=>{
        fetch('http://localhost:5000/question/get')
            .then(response => response.json())
            .then(donnees=>{
                setQuestion(donnees.data);
            })
            .catch(error =>{
                console.log(`Error: ${error}`)
            })
        },[])   
    return(
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                {
                   question.filter(element=>
                        element.label === label
                    ).map((element, index)=>{
                        return(
                            <p key={index}>{element.content}</p>
                    )})
                }
                
                </div>
            </div>
        </div>

        
    )
    
}
export default QuestionItem;