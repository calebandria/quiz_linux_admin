import React from 'react'
import { useForm } from 'react-hook-form'

import './sign-up.styles.scss'
import { supabase } from '../../utils/supabase/supabase.utils'
import { ReactComponent as GithubLogo } from '../../assets/github-icon.svg'
import { ReactComponent as GoogleLogo } from '../../assets/google_icon.svg'
import { ReactComponent as FacebookLogo } from '../../assets/facebook_log.svg'


const SignUp = () => {
    const { register, handleSubmit, formstate: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" id="username" placeholder='Username'  {...register('username', { required: 'Username is required' })} />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div>
                    <input type="email" id="email" placeholder='Email' {...register('email', { required: 'Email is required' })} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder='Password' {...register('password', { required: 'Password is required' })} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder='Confirm Password'  {...register('confirmPassword', { required: 'Confirm Password is required' })} />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <GoogleLogo className='google_logo' onClick={login_google} />
            <FacebookLogo className='facebook_logo' onClick={login_facebook} />
            <GithubLogo className='github_logo' onClick={login_github} />
        </div>
    )
}
export default SignUp;
