import './create-theme.styles.scss'
import Icon from '@mui/material/Icon'

import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

const CreateTheme = ({activeCrea, handleClickCrea, setThemes}) => {
    const form = useForm({
        defaultValues:{
            label: ""
        }
    });

    const {register, control, handleSubmit, reset, formState} = form;
    const {errors, isSubmitSuccessful} = formState;

    const onSubmit = (data,e)=>{ 
        console.log(e);
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
            };
        
        fetch("http://localhost:5000/theme/post", requestOptions)
            .then((response) =>console.log(response))
        

    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset();
            fetch("http://localhost:5000/theme/get")
                .then((response)=> response.json())
                .then(donnees=>{
                    setThemes(donnees.data);
                })
        }
    },[isSubmitSuccessful, reset, setThemes])

    return(
        <div className="create-theme" style={{display: activeCrea? "block":"none"}} onSubmit={handleSubmit(onSubmit)}>
            <form className='add-theme' method="post" noValidate>
                <h2>Add a theme</h2>
                <input type="text" id="" {...register("label", {
                    required: {
                        value: true,
                        message:'New theme is required'
                    }
                })}/>
                <p className="error">{errors.label?.message}</p>
                <input type="submit" value="Add" />
            </form>
            <DevTool control={control}/>
            <div className="close-button" onClick={handleClickCrea}>
                <Icon sx={{color:'#FFA629'}}>close</Icon>
            </div>
        </div>
    )
}
export default CreateTheme;