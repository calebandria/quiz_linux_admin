import ListItems from "../../components/list-items.component";

import './home.styles.scss'
import { useState,useEffect } from "react";
const Home = () =>{

    const titles = ['THEMES', 'QUESTIONS', 'ANSWERS']
    const [theme, setTheme] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/theme/get')
          .then(response => response.json())
          .then(donnees =>{
              setTheme(donnees.data);
          })
    },[]);

    return(
        <div className="home-container">
            {titles.map((title, index)=>{
                return(
                   <ListItems key={index} title ={title} className="list-item" theme={theme} />  
                )
               
            })}
        </div>
        
    )
};
export default Home;