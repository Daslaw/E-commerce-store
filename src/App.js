// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/NavBar';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './components/pages/cancel';
import Success from './components/pages/success';
import Store from './components/pages/store';
import CartProvider from './components/CartContext';

// http://localhost:3000/
// http://localhost:3000/success -> success

function App() {
  return (
    <CartProvider>
        <Container>
            <NavBarComponent></NavBarComponent>
            <BrowserRouter>
                <Routes>
                  <Route index element={<Store />}/>
                  <Route path="success" element={<Success />}/>
                  <Route path="cancel" element={<Cancel />}/>
                </Routes>
            </BrowserRouter>
        </Container>
    </CartProvider>
  );
}


export default App;
