import './edit-theme.styles.scss'
import Icon from '@mui/material/Icon'
import CloseIcon from '@mui/icons-material/Close';
import { supabase } from '../../utils/supabase/supabase.utils'

import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


const EditTheme = ({ handleClickEdit, label, setThemes,id}) => {
    const form = useForm({
        defaultValues: {
            theme: label
        }
    });

    const { register, control, handleSubmit, reset, formState } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = async (event) => {
        try {

            const { data, error } = await supabase
                .from('theme')
                .update({ theme: event.theme })
                .eq('id_theme', id)
                .select()

            if (error) throw (error)
            alert("Theme updated successfully: ", data)
            reset({
                fieldName:''
            })

        } catch (error) {
            alert("An error occured", error.message)
        }

    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            handleClickEdit();
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
    }, [isSubmitSuccessful, handleClickEdit, setThemes])

    return (
        <div className="create-theme" onSubmit={handleSubmit(onSubmit)}>
            <form className='add-theme' method="post" noValidate>
                <h2>Edit a theme</h2>
                <input type="text" id="" {...register("theme", {
                    required: {
                        value: true,
                        message: 'New theme is required'
                    }
                })} />
                <p className="error">{errors.label?.message}</p>
                <input type="submit" value="Edit" />
            </form>
            <DevTool control={control} />
            <div className="close-button" onClick={handleClickEdit}>
                <Icon sx={{ color: '#FFA629' }}><CloseIcon /></Icon>
            </div>
        </div>
    )
}
export default EditTheme;

