import './themes.styles.scss'
import Icon from '@mui/material/Icon';


const Themes = ()=>{
    return(
      <div className="themes">
        <h1 className='title'>THEMES</h1>
        <div className='list-content'>
          <div className='list-paragraph'>
            <ul>
              <li>N°</li>
              <li>content 1</li>
              <li>
                <Icon className='edit' sx={{color: '#1e1e1e'}}>edit</Icon>
                <Icon className='delete' sx={{color: '#1e1e1e'}}>delete</Icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
    )
  }

export default Themes;