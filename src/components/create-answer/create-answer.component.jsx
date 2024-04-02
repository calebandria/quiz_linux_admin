import './create-answer.styles.scss'

import Icon from '@mui/material/Icon'
import CloseIcon from '@mui/icons-material/Close';
import { supabase } from '../../utils/supabase/supabase.utils'
import { useContext, useEffect } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import { QuestionsContext } from '../../contexts/questions.context';


const CreateAnswer = ({ handleClickCrea, setAnswers }) => {
    const { questions } = useContext(QuestionsContext)
    const form = useForm({
        defaultValues: {
            answer: ""
        }
    });


    const { control, handleSubmit, reset, formState } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = async (event) => {
        try {
            const { data, error } = await supabase
                .from('answer')
                .insert([
                    { answer: event.answer, id_question: event.id_question , veracity: event.veracity},
                ])
                .select()

            if (error) {
                alert("Unsuccessfull", error)
            }
            else alert("Question created successfully: ", data)
        } catch (error) {
            alert("An error occured", error.message)
        }

    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            const fetchQuestion = async () => {
                let { data: answer, error } = await supabase
                    .from('answer')
                    .select('*')

                if (error) {
                    alert(error)
                }
                else setAnswers(answer)
            }
            fetchQuestion()
        }
    }, [isSubmitSuccessful, reset, setAnswers])

    return (
        <div className="create-answer" /* style={{ display: activeCrea ? "block" : "none" }} */ onSubmit={handleSubmit(onSubmit)}>
            <form className='add-answer' method="post" noValidate>
                <h2>Add an answer</h2>
                <Controller
                    name="answer"
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <TextField
                            {...field}
                            className='answer'
                            label="Answer"
                            fullWidth
                            variant='filled'
                            required
                        />
                    )}
                />

                <FormControl variant='filled' required fullWidth >
                    <InputLabel id="demo-simple-select-required-label">Question</InputLabel>
                    <Controller
                        name="id_question"
                        control={control}
                        defaultValue=''

                        render={({ field }) => (

                            <Select
                                {...field}
                                labelId='demo-simple-select-required-label'
                                id="demo-simple-select-required"
                                fullWidth
                            >
                                {questions.map((question, id) => (
                                    <MenuItem key={id} value={question.id_question}>{question.question}</MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>

                <FormControl variant='filled' fullWidth required >
                    <InputLabel id="demo-simple-select-required-label">Veracity</InputLabel>
                    <Controller
                        name="veracity"
                        control={control}
                        defaultValue=''
                        render={({ field }) => (

                            <Select
                                {...field}
                                labelId='demo-simple-select-required-label'
                                id="demo-simple-select-required"
                                fullWidth
                            >
                                <MenuItem value={Boolean(true)}>TRUE</MenuItem>
                                <MenuItem value={Boolean(false)}>FALSE</MenuItem>

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
export default CreateAnswer;