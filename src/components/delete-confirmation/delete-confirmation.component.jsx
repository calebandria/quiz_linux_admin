import './delete-confirmation.styles.scss'
import Icon from '@mui/material/Icon'
import CloseIcon from '@mui/icons-material/Close';
import { supabase } from '../../utils/supabase/supabase.utils'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

/* const onClick = (id)=>{
    const requestOptions = {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
    };

    fetch(`http://localhost:5000/theme/${id}/delete`, requestOptions)
        .then((response)=>console.log(response))
}
 */

const DeleteConfirmation = ({ setThemes, messageDelete, handleClickDele, id }) => {
    const { handleSubmit, formState } = useForm();
    const { isSubmitSuccessful } = formState;

    const onSubmit = async () => {

        try {
            const { error } = await supabase
                .from('theme')
                .delete()
                .eq('id_theme', id)
            if (error) throw error
            
        }
        catch(error){
            alert("An error occured", error.message)
        }

        
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            handleClickDele()
            const fetchTheme = async () => {
                let { data: theme, error } = await supabase
                    .from('theme')
                    .select('*')

                if (error) {
                    alert(error)
                }
                else setThemes(theme)
            }
            fetchTheme()
        }
    }, [isSubmitSuccessful, handleClickDele,setThemes])



    return (
        <div className="delete-confirmation" /* style={{display: activeDele? "block": "none"}} */>
            <form className='delete-theme' onSubmit={handleSubmit(onSubmit)} >
                <h2>{messageDelete}</h2>
                <input className="input-1" type="submit" value="Delete" />
                <input className="input-2" type="button" value="Cancel" onClick={handleClickDele} />
            </form>
            <div className="close-button" onClick={handleClickDele}>
                <Icon sx={{ color: '#FFA629' }} ><CloseIcon /></Icon>
            </div>
        </div>

    )
}

export default DeleteConfirmation;