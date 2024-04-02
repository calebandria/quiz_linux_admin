import './edit-question.styles.scss'
import Icon from '@mui/material/Icon'
import CloseIcon from '@mui/icons-material/Close';
import { supabase } from '../../utils/supabase/supabase.utils'
import { useContext, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Controller, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import { ThemesContext } from '../../contexts/themes.context';

const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: 'white',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: 'white',
          },
        },
      },
    },
  });
  

const EditQuestion = ({ handleClickEdit, label, id, idTheme, setQuestions }) => {

    const { themes } = useContext(ThemesContext)
    const form = useForm({
        defaultValues: {
            question: label,
            id_theme: idTheme
        }
    });


    const { control, handleSubmit, reset, formState } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = async (event) => {
        try {
            const { data, error } = await supabase
                .from('question')
                .update([
                    { question: event.question, id_theme: event.id_theme },
                ])
                .eq('id_question', id)
                .select()

            if (error) {
                throw (error)
            }


            alert("Question updated successfully: ", data)
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
        <ThemeProvider theme={theme}>
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
                                variant='filled'
                                fullWidth
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'white', // Set the background color to white
                                        '& fieldset': {
                                            borderColor: 'primary.main', // Adjust the border color if needed
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main', // Adjust the border color on hover if needed
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'primary.main', // Adjust the border color when focused if needed
                                        },
                                    },
                                }}

                            />
                        )}
                    />
                

                <FormControl variant='filled' required fullWidth>
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
                <Button type="submit" value="edit">Edit</Button>
            </form>
            <DevTool control={control} />
            <div className="close-button" onClick={handleClickEdit}>
                <Icon sx={{ color: '#FFA629' }}><CloseIcon /></Icon>
            </div>
        </div>
        </ThemeProvider>
    )
}
export default EditQuestion;