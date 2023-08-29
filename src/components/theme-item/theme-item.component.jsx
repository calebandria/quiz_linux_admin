import  './theme-item.styles.scss'
const ThemeItem = ({inside})=>{
    console.log("Item");

    const handleClick = (event) =>{
        console.log(event.target.innerHTML)
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