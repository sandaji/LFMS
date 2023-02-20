import {useState} from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen';
import Dashboard from './admin/scenes/dashboard/index';
import Topbar from "./admin/scenes/global/Topbar";
import Sidebar from "./admin/scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <Router>
         <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Header />
       <main className='py-3'>
       <Sidebar isSidebar={isSidebar} />
         <Container>
         <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path='/profile' element={
                    <ProfileScreen />}
                />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />}  />
            {userInfo && userInfo.isAdmin && (
            <Route
                path="/admin/dashboard"
                element={
                 
                    <Dashboard />
                
                }
              />)}</Routes>
         </Container>
       </main>
       <Footer />
       </ThemeProvider>
    </ColorModeContext.Provider>
    </Router>
  );
}

export default App;
