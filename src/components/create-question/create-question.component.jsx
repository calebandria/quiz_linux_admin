import './create-question.styles.scss'
import Icon from '@mui/material/Icon'
import CloseIcon from '@mui/icons-material/Close';
import { supabase } from '../../utils/supabase/supabase.utils'

import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


const CreateQuestion = ({ handleClickCrea, setThemes }) => {
    const form = useForm({
        defaultValues: {
            theme: ""
        }
    });


    const { register, control, handleSubmit, reset, formState } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = async (event) => {
        try {
            const { data, error } = await supabase
                .from('theme')
                .insert([
                    { theme: event.theme },
                ])
                .select()
            if (error) throw (error)

            alert("Theme successfully created: ", data)
        } catch (error) {
            alert("An error occured", error.message)
        }

    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
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
    }, [isSubmitSuccessful, reset, setThemes])

    return (
        <div className="create-theme" /* style={{ display: activeCrea ? "block" : "none" }} */ onSubmit={handleSubmit(onSubmit)}>
            <form className='add-theme' method="post" noValidate>
                <h2>Add a question</h2>
                <input type="text" id="" {...register("theme", {
                    required: {
                        value: true,
                        message: 'New theme is required'
                    }
                })} />
                <p className="error">{errors.label?.message}</p>
          {/*       <input type="submit" value="Add" /> */}
            </form>
            <DevTool control={control} />
            <div className="close-button" onClick={handleClickCrea}>
                <Icon sx={{ color: '#FFA629' }}><CloseIcon /></Icon>
            </div>

            <button className='next'onClick>Next</button>
        </div>
    )
}
export default CreateQuestion;