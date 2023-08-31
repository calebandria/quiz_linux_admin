import  './theme-item.styles.scss'
import { useState,useEffect } from "react";
const ThemeItem = ({title,setLabel})=>{
    const [theme, setTheme] = useState([]);
    const [active,setActive] = useState(-1)
    useEffect(()=>{
        fetch('http://localhost:5000/theme/get')
            .then(response => response.json())
            .then(donnees=>{
                setTheme(donnees.data);
            })
    },[])

    const handleClick = (event,index) =>{
        setLabel(event.target.innerHTML);
        setActive(index)
    }

    return(
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                {
                   theme.map((element,index)=>{
                    return(
                        <p key={index} style={{backgroundColor:active===index? "#FFA629":"#757575"}} onClick={(e)=>handleClick(e,index)}>{element.label}</p>
                    )}) 
                }
                
                </div>
            </div>
        </div>

        
    )
    
}
export default ThemeItem;