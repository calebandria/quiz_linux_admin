import { Routes,Route} from 'react-router-dom'
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Themes from './routes/themes/themes.component';
import SignUp from './routes/sign-up/sign-up.component';
import LogIn from './routes/login/login.component';
const Questions = ()=>{
  return(
      <h1>I am Questions</h1>
  )
}
const Answers = ()=>{
  return(
      <h1>I am Answers</h1>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Navigation />}>
      <Route index element= {<LogIn />}/>
        <Route path='homepage' element= {<Home />}/>
        <Route path='themes' element ={<Themes/>} />
        <Route path='questions' element ={<Questions/>} />
        <Route path='answers' element ={<Answers/>} />
        <Route path='signup' element={<SignUp/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
