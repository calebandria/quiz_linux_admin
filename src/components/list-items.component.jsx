/* import { useState } from 'react'; */
import './list-items.styles.scss'


const ListItems = ({title, theme})=>{
   /*  const [bgColor, setBgColor] = useState('#757575');

    const clickEvent = ()=>{
        const newColor = "#ffa629"
        setBgColor(newColor);
    }
 */
    return(
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                   {theme.map((element)=>{
                        return(
                            <p key={element.id_theme}>{element.label}</p>
                        )
                   })}
                </div>
            </div>
        </div>
    )
}
export default ListItems;