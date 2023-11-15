import './themes.styles.scss'
import Icon from '@mui/material/Icon';

import { useState, useContext } from 'react';

import { ThemesContext } from '../../contexts/themes.context';
import CreateTheme from '../../components/create-theme/create-theme.component'
import DeleteConfirmation from '../../components/delete-confirmation/delete-confirmation.component';

const Themes = ()=>{

    const [activeCrea, setActiveCrea] = useState(false);
    const [activeDele, setActiveDele] = useState(false);
    const { themes, setThemes } = useContext(ThemesContext);

    const mesDel = "Are you sure to delete this theme and all the questions with it?"

    const handleClickCrea = ()=>{
      if(activeCrea) 
        setActiveCrea(false)
      else setActiveCrea(true)
    }

    const handleClickDele = (id)=>{
      if(activeDele){
        setActiveDele(false)
      }
      else {
        setActiveDele(true);
      }
      
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
                      <Icon onClick = {()=>{console.log("Icon")}} className='edit'  sx={{color: '#1e1e1e'} } >edit</Icon>
                      <Icon className='delete' sx={{color: '#1e1e1e'}} onClick={()=> handleClickDele(theme.id_theme)} >delete</Icon>
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
          <Icon className='plus' sx={{color: '#FFA629' }} onClick={()=>handleClickCrea()} >add</Icon>
        </div>
        <CreateTheme activeCrea={activeCrea} handleClickCrea={handleClickCrea} setThemes={setThemes}></CreateTheme>
        <DeleteConfirmation messageDelete={mesDel} activeDele={activeDele} handleClickDele={handleClickDele} ></DeleteConfirmation>
        <div className='overlay-visible' style={{display: (activeCrea || activeDele)? "block":"none"}}></div>
      </div>
  
    )
  }

export default Themes;