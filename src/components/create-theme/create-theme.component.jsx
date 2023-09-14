import './create-theme.styles.scss'
import Icon from '@mui/material/Icon'

const CreateTheme = ({active, handleClick}) => {

    return(
        <div className="create-theme" style={{display: active? "block":"none"}}>
            <form className='add-theme' action="" method="post">
                <h2 for="new_theme">Add a theme</h2>
                <input type="text" name="new_theme" id="" /> <br/>
                <input type="submit" value="Add" />
            </form>
            <div className="close-button" onClick={()=>handleClick()}>
                <Icon sx={{color:'#FFA629'}}>close</Icon>
            </div>
        </div>
    )
}
export default CreateTheme;