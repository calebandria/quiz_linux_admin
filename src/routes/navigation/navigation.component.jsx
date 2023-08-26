import { Fragment } from "react";
import { Outlet, Link} from "react-router-dom";

import { ReactComponent as LinuxLogo} from '../../assets/linux_logo.svg'
import './navigation.styles.scss'
const Navigation = ()=>{
    return(
        <Fragment>
            <div className="navigation">
               <div className="nav-links-container">
                <Link className="nav-link" to='/themes'>
                    THEMES
                </Link>
                <Link className="nav-link" to='/questions'>
                    QUESTIONS
                </Link>
                <Link className="nav-link" to='/answers'>
                    ANSWERS
                </Link>
               </div>
               <div className="nav-links-title-home">
                    <Link className="nav-title" to= '/'>
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