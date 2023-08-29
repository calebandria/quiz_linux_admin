import ListItems from "../../components/listItems/list-items.component";

import './home.styles.scss'


const Home = () =>{

    /* const titles =["THEMES", "QUESTIONS", "ANSWERS"]; */
    
    console.log("Home")
    return(
        <div className="home-container">
            <ListItems key="1" title ="THEMES" className="list-item"/>
            <ListItems key="2" title = "QUESTIONS" className="list-item" />
        </div>
        
    )
};
export default Home;