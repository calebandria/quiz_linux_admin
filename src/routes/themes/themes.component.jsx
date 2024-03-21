import './themes.styles.scss'
import Icon from '@mui/material/Icon';
/* import { supabase } from '../../utils/supabase/supabase.utils'; */

import { useState, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ThemesContext } from '../../contexts/themes.context';
import CreateTheme from '../../components/create-theme/create-theme.component'
import DeleteConfirmation from '../../components/delete-confirmation/delete-confirmation.component';
const Themes = () => {

  const [activeCrea, setActiveCrea] = useState(false);
  const { themes, setThemes } = useContext(ThemesContext);
  const [activeDel, setActiveDel] = useState(false);
  const [id, setId] = useState(0);


  const mesDel = "Are you sure to delete this theme and all the questions with it?"

  const handleClickCrea = () => {
    if (activeCrea)
      setActiveCrea(false)
    else setActiveCrea(true)
  }

  const handleClickDel = () => {
    if (activeDel)
      setActiveDel(false)
    else setActiveDel(true)
    console.log("clicked")
  }


 /*  const handleConfirmDelete = async(id) => {
    const { error } = await supabase
        .from('theme')
        .delete()
        .eq('id_theme',id)
        if(error) throw error
  }; */
  return (
    <div className="container">
      <div className="themes">
        <h1 className='title'>THEMES</h1>
        <div className='list-content'>
          {themes.map((theme, id) => {
            return (
              <div key={id} className='list-paragraph'>
                <ul>
                  <li>{theme.id_theme}</li>
                  <li>{theme.theme}</li>
                  <li>
                    <Icon onClick className='edit' sx={{ color: '#1e1e1e' }} >
                      <EditIcon />
                    </Icon>

                    <Icon onClick={ ()=>{
                      /* console.log("delete "+ theme.id_theme) */
                      handleClickDel()
                      setId(theme.id_theme)
                      }
                      } 
                      className='delete' 
                      sx={{ color: '#1e1e1e' }} 
                    >
                      <DeleteIcon />
                    </Icon>
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
        <Icon className='plus' sx={{ color: '#FFA629' }} onClick={() => handleClickCrea()} ><AddIcon /></Icon>
      </div>
      {activeCrea && <CreateTheme activeCrea={activeCrea} handleClickCrea={handleClickCrea} setThemes={setThemes}></CreateTheme>}
      {activeDel && <DeleteConfirmation  messageDelete={mesDel} handleClickDele={handleClickDel} id={id} setId={setId} setThemes={setThemes}></DeleteConfirmation> }
      <div className='overlay-visible' style={{ display: (activeCrea | activeDel) ? "block" : "none" }}></div>
    </div>

  )
}

export default Themes;