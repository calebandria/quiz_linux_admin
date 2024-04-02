import './create-question.styles.scss'
import Icon from '@mui/material/Icon'
import CloseIcon from '@mui/icons-material/Close';
import { supabase } from '../../utils/supabase/supabase.utils'
import { useContext, useEffect } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import { ThemesContext } from '../../contexts/themes.context';


const CreateQuestion = ({ handleClickCrea, setQuestions }) => {
    const { themes } = useContext(ThemesContext)
    const form = useForm({
        defaultValues: {
            theme: ""
        }
    });


    const { control, handleSubmit, reset, formState } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = async (event) => {
        try {
            const { data, error } = await supabase
                .from('question')
                .insert([
                    { question: event.question, id_theme: event.id_theme },
                ])
                .select()

            if (error) {
                throw(error)
            }
            

            alert("Question created successfully: ", data)
        } catch (error) {
            alert("An error occured", error.message)
        }

    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            const fetchQuestion = async () => {
                let { data: question, error } = await supabase
                    .from('question')
                    .select('*')

                if (error) {
                    alert(error)
                }
                else setQuestions(question)
            }
            fetchQuestion()
        }
    }, [isSubmitSuccessful, reset, setQuestions])

    return (
        <div className="create-question" /* style={{ display: activeCrea ? "block" : "none" }} */ onSubmit={handleSubmit(onSubmit)}>
            <form className='add-question' method="post" noValidate>
                <h2>Add a question</h2>
                <Controller
                    name="question"
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className='question'
                            label="Question"
                            fullWidth
                            variant='filled'
                            required
                        />
                    )}
                />
                <FormControl variant='filled'required fullWidth>
                    <InputLabel id="demo-simple-select-required-label">Theme</InputLabel>
                    <Controller
                        name="id_theme"
                        control={control}
                        defaultValue=''
                        render={({ field }) => (

                            <Select
                                {...field}
                                labelId='demo-simple-select-required-label'
                                id="demo-simple-select-required"
                                fullWidth

                            >
                                {themes.map((theme, id) => (
                                    <MenuItem key={id} value={theme.id_theme}>{theme.theme}</MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>
                <p className="error">{errors.label?.message}</p>
                <Button type="submit" value="Add">Add</Button>
            </form>
            <DevTool control={control} />
            <div className="close-button" onClick={handleClickCrea}>
                <Icon sx={{ color: '#FFA629' }}><CloseIcon /></Icon>
            </div>
        </div>
    )
}
export default CreateQuestion;