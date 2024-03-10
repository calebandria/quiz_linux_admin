import { Fragment } from "react";
import { Outlet, Link} from "react-router-dom";

import { ReactComponent as LinuxLogo} from '../../assets/linux_logo.svg'
import './navigation.styles.scss'
import  {useState} from 'react'
import DropdownMenu from "../../components/dropdown-menu/dropdown-menu.component";

const Navigation = ({token})=>{
    const  [activeColor, setActiveColor] = useState("");
    const handleFocus = (event)=>{
        setActiveColor(event.target.attributes[0].nodeValue)
    }

    return(
        <Fragment>
            <div className="navigation">
               <div className="nav-links-container">
                {token?<Link id="theme" className="nav-link" to='/themes' style={{color:activeColor==="theme" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                    THEMES
                </Link>:""}
                {token?<Link id="question" className="nav-link" to='/questions' style={{color:activeColor==="question" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                    QUESTIONS
                </Link>:""}
                {token?<Link id="answer" className="nav-link" to='/answers' style={{color:activeColor==="answer" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                    ANSWERS
                </Link>:""}
               </div>
               <div className="nav-links-title-home">
                    <Link id="admin" className="nav-title" to= '/'  onFocus={handleFocus}>
                        <LinuxLogo className='logo'/>
                        LINUX QUIZ ADMIN
                </Link>
               </div>
               {token?"":<Link id="signup" className="nav-link" to='/signup' style={{color:activeColor==="signup" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                    SIGN UP
               </Link>}
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;