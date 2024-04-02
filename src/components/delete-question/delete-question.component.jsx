import './delete-question.styles.scss'
import Icon from '@mui/material/Icon'
import CloseIcon from '@mui/icons-material/Close'
import { supabase } from '../../utils/supabase/supabase.utils'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'


const DeleteQuestion = ({ messageDelete, id, handleClickDele, setQuestions}) => {
    const { handleSubmit, formState } = useForm();
    const { isSubmitSuccessful } = formState;

    const onSubmit = async () => {
        try {
            const { error } = await supabase
                .from('question')
                .delete()
                .eq('id_question', id)
            if (error) throw error

        } catch (error) {
            alert("An error occured", error.message)
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            handleClickDele()
            const fetchTheme = async () => {
                let { data: question, error } = await supabase
                    .from('question')
                    .select('*')

                if (error) {
                    alert(error)
                }
                else setQuestions(question)
            }
            fetchTheme()
        }
    }, [isSubmitSuccessful, handleClickDele, setQuestions])



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
export default DeleteQuestion