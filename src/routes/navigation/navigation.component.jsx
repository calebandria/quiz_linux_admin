import { Link } from "react-router-dom";

import { ReactComponent as LinuxLogo} from '../../assets/linux_logo.svg'
import './navigation.styles.scss'
import  {useState} from 'react'
import DropdownMenu from "../../components/dropdown-menu/dropdown-menu.component";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navigation = ({token, setToken})=>{

    const  [activeColor, setActiveColor] = useState("");
    const [activeDropdown, setActiveDropdown] = useState(false)
    

    const handleFocus = (event)=>{
        setActiveColor(event.target.attributes[0].nodeValue)
        if(activeDropdown) setActiveDropdown(false);
    }
    const handleDropdown = (event)=>{
        activeDropdown?setActiveDropdown(false):setActiveDropdown(true)
        setActiveColor(event.target.id)
    }

    return(
    <div className="navigation-outside">
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
               <div> 
                    {token?<AccountCircleIcon id="account-icon"style={{ fontSize: 30 ,color:activeColor==="account-icon" ? "white" : "#1e1e1e"}} onClick={handleDropdown}/>:<Link id="/signup" className="nav-link" to='/signup' style={{color:activeColor==="signup" ? "white" : "#1e1e1e"}} onFocus={handleFocus}>
                        SIGN UP
                </Link>}
                    {token && activeDropdown && <DropdownMenu token={token} setToken={setToken}/>}
               </div>
        </div>
    </div>
    
    )
}
export default Navigation;