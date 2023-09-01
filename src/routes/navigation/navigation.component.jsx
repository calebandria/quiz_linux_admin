import { Fragment } from "react";
import { Outlet, Link} from "react-router-dom";

import { ReactComponent as LinuxLogo} from '../../assets/linux_logo.svg'
import './navigation.styles.scss'
import  {useState} from 'react'
const Navigation = ()=>{
    const  [active, setActive] = useState("");
    const handleFocus = (event)=>{
        setActive(event.target.attributes[0].nodeValue)
    }

    return(
        <Fragment>
            <div className="navigation">
               <div className="nav-links-container">
                <Link id="theme" className="nav-link" to='/themes' style={{color:active==="theme" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                    THEMES
                </Link>
                <Link id="question" className="nav-link" to='/questions' style={{color:active==="question" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                    QUESTIONS
                </Link>
                <Link id="answer" className="nav-link" to='/answers' style={{color:active==="answer" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                    ANSWERS
                </Link>
               </div>
               <div className="nav-links-title-home">
                    <Link id="admin" className="nav-title" to= '/'  onFocus={handleFocus}>
                        <LinuxLogo className='logo'/>
                        LINUX QUIZ ADMIN
                </Link>
               </div>
               
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;