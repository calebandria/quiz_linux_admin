import './question-item.styles.scss'
const QuestionItem =({inside}) =>{
    return(
        inside.map((element,index)=>{
            return(
                <p key={index}>{element.content}</p>
            )
        })
    )
}

export default QuestionItem;