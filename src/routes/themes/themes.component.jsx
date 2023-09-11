import './themes.styles.scss'
import {Table, TableBody} from "@mui/material"

const Themes = ()=>{
    return(
      <div className="themes">
        <h1 className='title' style={{color:'#ffff'}}>THEMES</h1>
        <div className='list-content'>
          {/* <p className='list-paragraph'>content 1</p>
          <p className='list-paragraph'>content 1</p>
          <p className='list-paragraph'>content 1</p>
          <p className='list-paragraph'>content 1</p> */}
          <Table>
            <TableBody
  
            />
          </Table>
        </div>
      </div>
        
    )
  }

export default Themes;