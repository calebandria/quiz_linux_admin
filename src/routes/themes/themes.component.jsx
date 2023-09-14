import './themes.styles.scss'
import Icon from '@mui/material/Icon';

import { useContext } from 'react';

import { ThemesContext } from '../../contexts/themes.context';


const Themes = ()=>{

    const { themes } = useContext(ThemesContext);

    return(
      <div className="themes">
        <h1 className='title'>THEMES</h1>
        <div className='list-content'>
          { themes.map((theme, id)=>{
            return(
              <div key={id}className='list-paragraph'>
                <ul>
                  <li>{theme.id_theme}</li>
                  <li>{theme.label}</li>
                  <li>
                    <Icon onClick = {()=>{console.log("Icon")}} className='edit'  sx={{color: '#1e1e1e'} }>edit</Icon>
                    <Icon className='delete' sx={{color: '#1e1e1e'}}>delete</Icon>
                  </li>
                </ul>
              </div>
            )
          })}
          
        </div>
        <Icon className='plus' sx={{color: '#FFA629' }}>add</Icon>
      </div>
    )
  }

export default Themes;