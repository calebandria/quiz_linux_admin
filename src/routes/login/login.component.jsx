import React from 'react'
import { useForm } from 'react-hook-form'
import './login.styles.scss'


const LogIn = ()=>{
    const { register, handleSubmit, formState: { errors }, watch , reset} = useForm();


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