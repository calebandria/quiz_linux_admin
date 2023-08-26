import ListItems from "../../components/list-items.component";

import './home.styles.scss'

const Home = ({titles}) =>{
    return(
        <div className="home-container">
            {titles.map((title)=>{
                return(
                   <ListItems key={titles.indexOf(title)} title ={title} className="list-item" />  
                )
               
            })}
        </div>
        
    )
};
export default Home;