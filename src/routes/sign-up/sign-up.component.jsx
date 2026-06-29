import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import TextField from '@mui/material/TextField';
import './sign-up.styles.scss'
import { supabase } from '../../utils/supabase/supabase.utils'
import GithubLogo from '../../assets/github-icon.svg?react'
import GoogleLogo from '../../assets/google_icon.svg?react'
import FacebookLogo from '../../assets/facebook_log.svg?react'


import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const SignUp = () => {
    const { register, handleSubmit, control, formState: { errors }, watch , reset} = useForm();
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const password = watch('password')

    const onSubmit = async (formData) => {
        try{
            const { error } = await supabase.auth.signUp(
            {
              email: formData.email,
              password: formData.confirmPassword,
              options: {
                data: {
                  firstname: formData.firstname,
                  familyname: formData.familyname,
                }
              }
            }
          )
          if(error) alert(error)
          else alert("check your email for verification")
        }
        catch(error){
            alert(error);
        }

        reset()
        
    }



    const login_github = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github"
        });
    }

    const login_google = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google"
        });
    }
    const login_facebook = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "facebook"
        });
    }



    return (
        <div className='sign_up'>
            <form onSubmit={handleSubmit(onSubmit)} className='mail_signup'>
                <h3>SIGN UP</h3>
                <div>
                    <TextField 
                            className="input"
                            type="text" 
                            id="firstname" 
                            label='Firstname'  
                            error={Boolean(errors.firstname)}
                            {...register('firstname', { required: 'Firstname is required' })}

                    />
                    {errors.firstname && <span> <br />{errors.firstname.message}</span>}
                </div>
                
                <div>
                    <TextField 
                            className="input"
                            type="text" 
                            id="familyname" 
                            label='Family name'  
                            error={Boolean(errors.familyname)}
                            {...register('familyname', { required: 'Family name is required' })}
                    />
                    {errors.familyname && <span> <br />{errors.familyname.message}</span>}
                </div>
                <div>
                    <TextField 
                            className="input"
                            type="email" 
                            id="email" 
                            label='Email'  
                            error={Boolean(errors.email)}
                            {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <span> <br />{errors.email.message}</span>}
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
                                    {...register('password', {required:true})}
                                    error={Boolean(errors.password)}
                                   
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
                                {errors.password && <span> <br />Password required</span>}
                            </div>
                        )} 
                    />
                    <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                                <div>
                                    <TextField
                                        className='input'
                                        {...field}
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        label="Confirm password"
                                        {...register('confirmPassword', { required: true, validate: (value) => value === password })}
                                        error={Boolean(errors.confirmPassword)}
                                        InputProps={{
                                            endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                                id="view"
                                                >
                                                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                            )
                                        }}
                                    />
                                    {errors.confirmPassword && <span> <br />Password unmatched</span>}
                                </div>
                                
                            )} 
                />
                <button id="submit" type="submit">CREATE AN ACCOUNT</button>
            </form>
            <div className="oauths">
                <p>Continue with: </p>
                <div className="logos">
                    <GoogleLogo className='google_logo' onClick={login_google} />
                    <FacebookLogo className='facebook_logo' onClick={login_facebook} />
                    <GithubLogo className='github_logo' onClick={login_github} />
                </div>
                
            </div>
            
        </div>
    )
}
export default SignUp;
