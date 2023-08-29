import {useEffect} from 'react'

import './question-item.styles.scss'
const QuestionItem =({inside, label}) =>{

    useEffect(() => {
        console.log(label)
    });

    /* return(inside.filter((element)=>{
        return element.label === "Installing Linux"
    }).map((element,index) =>{
        return <p>{element.content}</p>
    })
    ) */
    return(
        inside.map((element,index)=>{
            return(
                <p key={index}>{element.content}</p>
            )
        })
    )
}

export default QuestionItem;