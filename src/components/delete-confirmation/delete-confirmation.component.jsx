import './delete-confirmation.styles.scss'
import Icon from '@mui/material/Icon'

/* const onClick = (id)=>{
    const requestOptions = {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
    };

    fetch(`http://localhost:5000/theme/${id}/delete`, requestOptions)
        .then((response)=>console.log(response))
}
 */
const DeleteConfirmation = ({messageDelete, handleClickDele, activeDele, clicked})=>{
    return(
        <div className="delete-confirmation" style={{display: activeDele? "block": "none"}}>
            <form className='delete-theme' method="delete">
                <h2>{messageDelete}</h2>
                <input className="input-1" type="submit" value="Delete"/>
                <input className="input-2" type="button" value="Cancel"/>
            </form>
            <div className="close-button" onClick={handleClickDele}>
                <Icon sx={{color:'#FFA629'}} >close</Icon>
            </div>
        </div>
       
    )
}

export default DeleteConfirmation;