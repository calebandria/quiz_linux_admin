/* import { useState } from 'react'; */
import './list-items.styles.scss'

import ThemeItem from '../theme-item/theme-item.component';
import QuestionItem from '../question-item/question-item.component';

import { useState,useEffect } from "react";

const ListItems = ({title})=>{
    const [theme, setTheme] = useState([]);
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/theme/get')
          .then(response => response.json())
          .then(donnees =>{
              setTheme(donnees.data);
          })
    },[]);

    useEffect(()=>{
        fetch('http://localhost:5000/question/get')
            .then(response => response.json())
            .then(donnees=>{
                setQuestion(donnees.data);
            })
    },[])

    const itemChoice = ()=>{
        if(title ==="THEMES"){
            return(
                 <ThemeItem inside={theme} /> 
            )
        }
        else if(title ==="QUESTIONS"){
            return(
                <QuestionItem inside={question}/>
            )
        }
    
    }
    console.log(theme)

    console.log("ListItems")
    return(
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                  {itemChoice()}
                </div>
            </div>
        </div>
    )
}
export default ListItems;