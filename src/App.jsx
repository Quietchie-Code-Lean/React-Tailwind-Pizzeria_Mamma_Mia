/* React dependencie */
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

/* providers */
import CartProvider from './context/CartContext.jsx';
import PizzasProvider from './context/PizzasContext.jsx';

/* style css */
import './App.css'

/* components */
import LoginPage from './views/LoginPage.jsx';
import RegisterPage from './views/RegisterPage.jsx';
import FooterPizza from './layout/FooterPizza.jsx'
import NavbarPizza from './layout/navbarPizza.jsx'
import PizzasHome from './layout/PizzasHome.jsx'
import Pizza from './views/Pizza.jsx';
import Cart from './views/Cart.JSX';
import Profile from './views/Profile.jsx';
import NotFound from './views/NotFound.jsx';


/* Array mock cart */
/* import { pizzaCart } from '../pizzas.js' */


function App() {

  /* Mock database to push users within objects array */
  const [DbUsers, setDbUsers] = useState([

    /* Mock Users for test */
    { id: "leleMON",
      email: "lele@lele.com",
      password: "lele123"},
      { id: "luluMON",
      email: "lulu@lulu.com",
      password: "lulu123"},
      { id: "lalaMON",
      email: "lala@lala.com",
      password: "lala123"}

  ]);


  return (
    <>
    <div className="min-h-screen flex flex-col">
          <CartProvider>
          <PizzasProvider>

              <NavbarPizza/>
              <main className="flex-1">
                  <Routes>
                    <Route index element={<PizzasHome />}/>
                    <Route path="/register" element={<RegisterPage 
                                                        DbUsers={DbUsers} 
                                                        setDbUsers={setDbUsers}/>}
                                                        />
                    <Route path="/login" element={<LoginPage 
                                                        DbUsers={DbUsers}
                                                        setDbUsers={setDbUsers}/>}
                                                        />
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/pizza/p001" element={<Pizza />}/>
                    <Route path="/cart" element={<Cart /* pizzaCart={pizzaCart} *//>}/>
                    <Route path="*" element={<NotFound />}/>
                  </Routes>
              </main>
              <FooterPizza/>

          </PizzasProvider>
          </CartProvider>
      </div>
    </>
  );
};

export default App;
