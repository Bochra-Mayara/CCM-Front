

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Reset from './Components/Reset/Reset';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Product from './Components/Product/Product';
import Contact from './Components/Contact/Contact';


import Service from './Components/Service/Service';
import CCM from './Components/CCM/CCM'









function App() {
  return (
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/login" element={ <Login/> } />
    <Route path="/register" element={ <Register/> } />
    <Route path="/forget" element={ <ForgotPassword/> } />
    <Route path="/reset" element={ <Reset/> } />
    <Route path="/product" element={ <Product/> } />
    <Route path="/contact" element={ <Contact/> } />
    
    
    <Route path="/service" element={ <Service/> } />
    <Route path="/ccm" element={ <CCM/> } />
    
  </Routes>
  
  );
}

export default App;
