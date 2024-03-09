import React from 'react'
import { useForm } from 'react-hook-form'

import './sign-up.styles.scss'
import { supabase } from '../../utils/supabase/supabase.utils'
import { ReactComponent as GithubLogo } from '../../assets/github-icon.svg'
import { ReactComponent as GoogleLogo } from '../../assets/google_icon.svg'
import { ReactComponent as FacebookLogo } from '../../assets/facebook_log.svg'


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, watch , reset} = useForm();

    const password = watch('password')

    const onSubmit = async (formData) => {
        try{
            const { dataAuth, error } = await supabase.auth.signUp(
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
                    <input type="text" id="firstname" placeholder='Firstname'  {...register('firstname', { required: 'Firstname is required' })} />
                    {errors.firstname && <span><br />{errors.firstname.message}</span>}
                </div>
                <div>
                    <input type="text" id="familyname" placeholder='Family name'  {...register('familyname', { required: 'Family name is required' })} />
                    {errors.familyname && <span> <br />{errors.familyname.message}</span>}
                </div>
                <div>
                    <input type="email" id="email" placeholder='Email' {...register('email', { required: 'Email is required' })} />
                    {errors.email && <span> <br />{errors.email.message}</span>}
                </div>
                <div>
                    <input type="password" id="password" placeholder='Password' {...register('password', { required: true })} />
                    {errors.password && <span><br /> Password required</span>}
                </div>
                <div>
                    <input type="password" id="confirmPassword" placeholder='Confirm Password'  {...register('confirmPassword', { required: true, validate: (value) => value === password })} />
                    {errors.confirmPassword && (<span><br/>Password unmatched</span>)}
                </div>
                <button type="submit">CREATE AN ACCOUNT</button>
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
