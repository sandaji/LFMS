
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen';
import Dashboard from './admin/Dashboard';
import AddUser from './admin/addUser';
import ListUser from './admin/listUser';
import ListBooks from './admin/listBooks';
import EditBooks from './admin/editBooks';
import CartScreen from './screens/CartScreen';
import AdminScreen from './admin/AdminScreen';
import AddProductScreen from './admin/AddProductScreen';

function App(){

  return (
<>      <ToastContainer  closeButton={false} position="top-right"  />


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
            <Route path='/cart' element={<CartScreen />}  />
           
           {/* //protected route */}
            <Route path='/profile' element={ <ProfileScreen />} />
            <Route path="/admin/dashboard" element={ <Dashboard /> } />
            <Route path="/admin/main" element={ <AdminScreen /> } />
            <Route path="/admin/add/user" element={ <AddUser /> } />
            <Route path="/admin/add/product" element={ <AddProductScreen /> } />
            <Route path="/admin/listuser" element={ <ListUser /> } />
            <Route path="/admin/listbooks" element={ <ListBooks /> } />
            <Route path="/admin/books/edit" element={ <EditBooks /> } />
          </Routes> 
         </Container>
       </main>
       <Footer />
 
    </Router>
    </>
  );
}

export default App;
