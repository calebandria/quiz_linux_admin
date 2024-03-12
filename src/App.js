import { Routes,Route, Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react';
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
  const [token, setToken] = useState(false);

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token));
  }

  /* maintaining the subscription over all the application */
  useEffect(()=>{
    if(sessionStorage.getItem('token'))
      setToken(sessionStorage.getItem('token'))

      console.log(sessionStorage.getItem('token'))
  },[])


  return (
    <div>
      <Navigation token={token} setToken={setToken} />
      <Routes>
      <Route  element= {<Outlet/>}>
        <Route index element={token? <Home/> : <LogIn setToken={setToken} />}/>
       {/*    {token ?<Route path='homepage' element= {<Home />}/>:""} */}
          {token ?<Route path='themes' element ={<Themes/>} />:""}
          {token ?<Route path='questions' element ={<Questions/>} />:""}
          {token ?<Route path='answers' element ={<Answers/>} />:""}
        <Route path='signup' element={<SignUp/>}/>
      </Route>
    </Routes>
    </div>
    
    
  );
}

export default App;
