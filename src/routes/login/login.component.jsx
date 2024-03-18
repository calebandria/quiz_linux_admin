import React, { useState } from 'react'
import { useForm, Controller} from 'react-hook-form'
import { supabase } from '../../utils/supabase/supabase.utils'
import './login.styles.scss'
import { useNavigate } from 'react-router-dom'
import TypeWriter from '../../components/typewriter/typewriter.component'

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';

const LogIn = ({setToken})=>{
    const { register, handleSubmit, control,formState: { errors }} = useForm();
    const [showPassword, setShowPassword] = useState(false)
    let navigate = useNavigate();

    const onSubmit = async(formData) =>{
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password, 
          })
          if(error) throw(error)
          /* console.log(data) */
          setToken(data)
          navigate("/")

        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="login">
            {<TypeWriter text="You will find more than you look for"/>}
            <form onSubmit={handleSubmit(onSubmit)} className='mail_login'>
                <h3>LOG IN</h3>
                <div>
                    <TextField 
                        className="input"
                        type="email" 
                        id="email"
                        label="Email"
                        error={Boolean(errors.email)}
                        {...register('email', { required: 'Email is required' })}
                        helperText={
                            <FormHelperText sx={{ color: 'red' }}>
                            {errors.email?.message || ''}
                            </FormHelperText>
                        }       
                    />
                </div>
    
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                            <div>
                                <TextField
                                    className='input'
                                    {...field}
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    label="Password"
                                    {...register('password', {required:"Password is required"})}
                                    error={Boolean(errors.password)}
                                    helperText={
                                        <FormHelperText sx={{ color: 'red' }}>
                                        {errors.password?.message || ''}
                                        </FormHelperText>
                                    }
                                    InputProps={{
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            id="view"
                                            >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                                                )} 
                    />

                <button id="submit" type="submit">CONNECT</button>
            </form>
            
        </div>
    )
}

export default LogIn;