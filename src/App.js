import { Routes, Route, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Themes from './routes/themes/themes.component';
import Questions from './routes/questions/questions.component';
import SignUp from './routes/sign-up/sign-up.component';
import LogIn from './routes/login/login.component';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Answers from './routes/answers/answers.component';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA629', // Change the primary color
    },
    secondary: {
      main: '#D9D9D9', // Change the secondary color
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  }
});

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }



  /* maintaining the subscription over all the application */
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token')
    if (storedToken)
      setToken(JSON.parse(storedToken))
  }, [])


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation token={token} setToken={setToken} />
        <Routes>
          <Route element={<Outlet />}>
            <Route index element={token ? <Home /> : <LogIn setToken={setToken} />} />
            {/*    {token ?<Route path='homepage' element= {<Home />}/>:""} */}
            {token ? <Route path='themes' element={<Themes />} /> : ""}
            {token ? <Route path='questions' element={<Questions />} /> : ""}
            {token ? <Route path='answers' element={<Answers />} /> : ""}
            <Route path='signup' element={<SignUp />} />
          </Route>
        </Routes>
      </ThemeProvider>

    </div>


  );
}

export default App;
