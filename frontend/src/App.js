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
import Dashboard from './admin/Dashboard';

function App(){

  return (
    <Router>
    
      <Header />
       <main className='py-3'>
       
         <Container>
          <Routes>

            {/* //public route */}
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />}  />
           
           {/* //protected route */}
            <Route path='/profile' element={ <ProfileScreen />} />
            <Route path="/admin/dashboard" element={ <Dashboard /> } />
          </Routes> 
         </Container>
       </main>
       <Footer />
 
    </Router>
  );
}

export default App;
