/* React dependencie */
import { Routes, Route } from 'react-router-dom';

/* providers */
import CartProvider from './context/CartContext.jsx';
import PizzasProvider from './context/PizzasContext.jsx';
import UserProvider from './context/UserContext.jsx';


/* style css */
import './App.css'

/* components */
import LoginPage from './views/LoginPage.jsx';
import RegisterPage from './views/RegisterPage.jsx';
import FooterPizza from './layout/FooterPizza.jsx'
import NavbarPizza from './layout/NavbarPizza.jsx'
import PizzasHome from './layout/PizzasHome.jsx'
import Pizza from './views/Pizza.jsx';
import Cart from './views/Cart.jsx';
import Profile from './views/Profile.jsx';
import NotFound from './views/NotFound.jsx';


function App() {
 


  return (
    <>
    <div className="min-h-screen flex flex-col">
          <CartProvider>
          <PizzasProvider>
          <UserProvider>


              <NavbarPizza/>
              <main className="flex-1">
                  <Routes>
                    <Route index element={<PizzasHome />}/>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/pizza/:id" element={<Pizza /> }/>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
              </main>
              <FooterPizza/>

          </UserProvider>
          </PizzasProvider>
          </CartProvider>
      </div>
    </>
  );
};

export default App;
