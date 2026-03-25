/* React dependencie */
import { Routes, Route, Navigate } from 'react-router-dom';


import { useContext } from 'react';
import { UserContext } from './context/UserContext.jsx';

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
  
  const { token } = useContext(UserContext);

  return (
    <>
    <div className="min-h-screen flex flex-col">
              <NavbarPizza/>
              <main className="flex-1">
                  <Routes>
                    <Route index element={<PizzasHome />}/>
                    <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to={"/"} />} />
                    <Route path="/login" element={!token ? <LoginPage /> : <Navigate to={"/"} />} />
                    <Route path="/profile" element={token ? <Profile /> : <Navigate to={"/login"} />} /> 
                    <Route path="/pizza/:id" element={<Pizza /> }/>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
              </main>
              <FooterPizza/>
      </div>
    </>
  );
};

export default App;
