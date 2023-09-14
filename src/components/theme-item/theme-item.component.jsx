import  './theme-item.styles.scss'
import { useState,useContext} from "react";

import { ThemesContext } from '../../contexts/themes.context';

const ThemeItem = ({title,setLabel})=>{
    const [active,setActive] = useState(-1)

    const {themes} = useContext(ThemesContext);

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
                   themes.map((element,index)=>{
                    return(
                        <p className='list-paragraph' key={index} style={{backgroundColor:active===index? "#FFA629":"#757575"}} onClick={(e)=>handleClick(e,index)}>{element.label}</p>
                    )}) 
                }
                
                </div>
            </div>
        </div>

        
    )
    
}
export default ThemeItem;