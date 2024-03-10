import React from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '../../utils/supabase/supabase.utils'
import './login.styles.scss'
import { useNavigate } from 'react-router-dom'


const LogIn = ()=>{
    const { register, handleSubmit, formState: { errors }, watch , reset} = useForm();
    let navigate = useNavigate();
    const onSubmit = async(formData) =>{
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
            
            
          })
          if(error) throw(error)

        } catch (error) {
            alert(error)
        }
        
    }

    return(
        <div className="login">
            <form onSubmit={handleSubmit(onSubmit)} className='mail_signup'>
                <h3>LOG IN</h3>
                <div>
                    <input type="email" id="email" placeholder='email'  {...register('email', { required: 'email is required' })} />
                    {<errors className="email"></errors> && <span><br />{errors.email.message}</span>}
                </div>
                <div>
                    <input type="password" id="password" placeholder='Password'  {...register('password', { required: 'Password is required' })} />
                    {errors.password && <span> <br />{errors.password.message}</span>}
                </div>
                <button type="submit">CONNECT</button>
            </form>
        </div>
    )
}

export default LogIn;