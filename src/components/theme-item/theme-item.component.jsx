import './theme-item.styles.scss'
import { useState, useContext } from "react";
import { ThemesContext } from '../../contexts/themes.context';

const ThemeItem = ({ title, setId_theme }) => {
    const { themes } = useContext(ThemesContext);
    const [active, setActive] = useState(-1)


    const handleClick = (event, index, id) => {
        console.log(event)
        setId_theme(id);
        setActive(index)
    }

    return (
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                    {
                        themes.map((element, index) => {
                            return (
                                <p key={index} style={{ backgroundColor: active === index ? "#FFA629" : "#757575" }} onClick={(e) => handleClick(e, index, element.id_theme)}>{element.theme}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>


    )

}
export default ThemeItem;