import './themes.styles.scss'
import Icon from '@mui/material/Icon';

import { useState, useContext } from 'react';

import { ThemesContext } from '../../contexts/themes.context';
import CreateTheme from '../../components/create-theme/create-theme.component'


const Themes = ()=>{

    const [active, setActive] = useState(false)
    const { themes } = useContext(ThemesContext);

    const handleClick = ()=>{
      if(active) 
        setActive(false)
      else setActive(true)
    }

    return(
      <div className="container">
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
          <Icon className='plus' sx={{color: '#FFA629' }} onClick={()=>handleClick()} >add</Icon>
        </div>
        <CreateTheme active={active} handleClick={handleClick}></CreateTheme>
        <div className='overlay-visible' style={{display: active? "block":"none"}}></div>
      </div>
  
    )
  }

export default Themes;