import './sign-up.styles.scss'
import {supabase} from '../../utils/supabase/supabase.utils'
import {ReactComponent as GithubLogo} from '../../assets/github-icon.svg'
import {ReactComponent as GoogleLogo} from '../../assets/google_icon.svg'
import {ReactComponent as FacebookLogo} from '../../assets/facebook_log.svg'

const SignUp = ()=>{
   const login_github  = async() =>{
    await supabase.auth.signInWithOAuth({
        provider:"github"
    });
    } 

    const login_google  = async() =>{
        await supabase.auth.signInWithOAuth({
            provider:"google"
        });
    }
    const login_facebook  = async() =>{
        await supabase.auth.signInWithOAuth({
            provider:"facebook"
        });
    }
    

    
    return(
        <div className='sign_up'>
            <form action="">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Family name'/>
                <input type="email" placeholder='Email address'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm password'/>
            </form>
            <GoogleLogo className='google_logo' onClick={login_google}/>
            <FacebookLogo className='facebook_logo' onClick={login_facebook}/>
            <GithubLogo className='github_logo' onClick={login_github}/>
        </div>
    )
}
export default SignUp;
