
import './dropdown-menu.styles.scss'
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const DropdownMenu = ({token, setToken, setActiveDropdown})=>{
    let navigate = useNavigate()

    const handleLogout = ()=>{
        sessionStorage.removeItem('token')
        setToken(false)
        setActiveDropdown(false)
        navigate("/")
    }
    
    return(
            <div className="dropdown">
                <div className="name">
                    <AccountCircleIcon className="account-icon"/>
                    <p>{token.user.user_metadata.firstname}</p>
                </div>

                <div className="menu" id="profile">
                    <PersonIcon className="menu-icon" id="profile-icon"/>
                    <div>
                         <Link>Profile</Link>
                    </div>
                        <KeyboardArrowRightIcon className="arrow-right"/>
                </div>

                <div className="menu" id="settings">
                    <SettingsIcon className="menu-icon" id="settings-icon" />
                    <div>
                        <Link>Settings</Link>
                    </div>                    
                        <KeyboardArrowRightIcon className="arrow-right"/>
                </div>

                <div onClick= {handleLogout} className="menu" id="logout">
                    <LogoutIcon className="menu-icon" id="logout-icon"/>
                    <p>
                        Log out
                    </p>
                    <KeyboardArrowRightIcon className="arrow-right"/>
                </div>
            </div>
    )
}

export default DropdownMenu