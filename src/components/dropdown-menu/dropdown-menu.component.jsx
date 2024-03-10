import{ Fragment} from "react";
import './dropdown-menu.styles.scss'
import { Link, Outlet } from "react-router-dom";
const DropdownMenu = ({token})=>{
    
    return(
        <Fragment>
            <div className="dropdown">
                <h3>{token.user.user_metadata.firstname} {token.user.user_metadata.familyname}</h3>
                <Link>Profile</Link>
                <Link>Messages</Link>
                <Link>Settings</Link>
                <Link>Log out</Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default DropdownMenu