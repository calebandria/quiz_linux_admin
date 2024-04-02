import './theme-item.styles.scss'
import { useContext } from "react";
import { ThemesContext } from '../../contexts/themes.context';

const ThemeItem = ({ title, setId_theme, setActiveTheme, activeTheme,setActiveQuest }) => {
    const { themes } = useContext(ThemesContext);


    const handleClick = (event, index, id) => {
        setId_theme(id);
        setActiveTheme(index)
        setActiveQuest(null)
    }

    return (
        <div className="list-items">
            <div className="content">
                <h2 className="title">{title}</h2>
                <div className="content-list">
                    {
                        themes.map((element, index) => {
                            return (
                                <p key={index} style={{ backgroundColor: activeTheme === index ? "#FFA629" : "#757575" }} onClick={(e) => handleClick(e, index, element.id_theme)}>{element.theme}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>


    )

}
export default ThemeItem;