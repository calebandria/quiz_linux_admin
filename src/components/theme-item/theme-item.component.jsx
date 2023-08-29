import  './theme-item.styles.scss'
const ThemeItem = ({inside, setLabel})=>{
    console.log("Item");

    const handleClick = (event) =>{
        setLabel(event.target.innerHTML)
    }

    return(
        inside.map((element,index)=>{
            return(
                <p key={index} onClick={handleClick}>{element.label}</p>
            )
        })
    )
    
}
export default ThemeItem;